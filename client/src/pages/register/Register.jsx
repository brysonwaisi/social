import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register