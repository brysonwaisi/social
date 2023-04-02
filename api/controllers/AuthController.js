import { db } from "../connect.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  // Check if a user exists
  //  use ? in place of req.body.username since it provides more security 
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    // if we have an error 
    if (err) return res.status(500).json(err)
    // if we have a user already
    if (data.length) return res.status(409).json('User already exists!')

    // Create a new user
    // hash pass
    const salt = bcrypt.genSaltSync(10)
    const hashedPass = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"

    const values = [req.body.username, req.body.email, hashedPass, req.body.name]
    
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err)
      return res.status(200).json("User Created!")
    })
  })
  
}

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length === 0) return res.status(404).json("User does not exist")

    const checkPass = bcrypt.compareSync(req.body.password, data[0].password)

    if(!checkPass) return res.status(400).json("Wrong Username or Password!")

    const token = jwt.sign({ id:data[0].id }, "secret")

    // destructuring our user to prevent returning pass
    const {password, ...others} = data[0]
    res.cookie("accessToken", token, {
      httpOnly: true,

    }).status(200).json(others)
  })
}

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out")
}