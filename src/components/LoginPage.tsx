// import React from 'react'
// import Game from './Game'
import './light.css'
// import './light.js' 

function LoginPage() {
  return (
    <div>
      <div className="wrapper">
            <div className="form-wrapper sign-in">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-group">
                        <input type="text" required/>
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" className="rem"/>Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <div className="signUp-link">
                        <p>Don't have an account? <a href="#" className="signUpBtn-link">Sign Up</a></p>
                    </div>
                </form>
            </div>

            <div className="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required/>
                        <label >Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required/>
                        <label >Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required/>
                        <label >Password</label>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" className="rem"/>I agree to the terms & conditions</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="signUp-link">
                        <p>Already have an account? <a href="#" className="signInBtn-link">Sign In</a></p>
                    </div>
                </form>
            </div>
            <a href='./Game.jsx'>click me</a>
        </div>
        <script src='./light.js'></script>
    </div>
  )
}

export default LoginPage;