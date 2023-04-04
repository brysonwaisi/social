import { useContext, useState } from "react";
import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
  };

  const {login} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome To Social</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula mauris. Aliquam sed accumsan libero, vitae facilisis nisi. Quisque luctus, erat sit amet consectetur interdum, turpis odio varius turpis, quis consequat nisi ex et purus. Duis egestas non justo non semper. In nulla mauris, fringilla at odio eu, venenatis interdum enim.</p>
          <span>Do you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" name='username' onChange={handleChange}/>
            <input type="password" placeholder="Password" name='password' onChange={handleChange} />
            {err && err}
            <Link to='/login'>
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login