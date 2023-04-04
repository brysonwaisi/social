import { useState } from 'react';
import './register.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs)
    } catch (err) {
      setErr(err.response.data)
    }
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Bryson Social</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula mauris. Aliquam sed accumsan libero, vitae facilisis nisi. Quisque luctus, erat sit amet consectetur interdum, turpis odio varius turpis, quis consequat nisi ex et purus. Duis egestas non justo non semper. In nulla mauris, fringilla at odio eu, venenatis interdum enim.</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" name='username' onChange={handleChange} />
            <input type="email" placeholder="Email" name='email' onChange={handleChange}/>
            <input type="password" placeholder="Password" name='password' onChange={handleChange}/>
            <input type="text" placeholder="Name" name='name' onChange={handleChange}/>
            <Link to='/register'>
              {err && err}
              <button onClick={handleClick}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register