// import { useState } from 'react'
// import Game from './Game'
import Game from './Game';
import './LoginPage.css'
// import './light.js' 

function LoginPage() {

    // const [signUp, setSignUp] = useState(true)

    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');
    const signInBtnLink= document.querySelector('.signInBtn-link');

   
        signUpBtnLink?.addEventListener('click', () =>{
            wrapper?.classList.toggle('active');
        })
        signInBtnLink?.addEventListener('click', () =>{
            wrapper?.classList.toggle('active');
        })


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
                        <label><input type="checkbox" className="rem"/> Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <div className="signUp-link">
                        <p>Don't have an account? <a className="signUpBtn-link" onClick={signUpBtnLink}>Sign Up</a></p>
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
                        <label><input type="checkbox" className="rem"/> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="signUp-link">
                        <p>Already have an account? <a className="signInBtn-link" onClick={signInBtnLink}>Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage;