import React from 'react'

const SignUp = () => {
  return (
    <div className="sign-out d-flex ai-center jc-center">
            <h3>I don't have an account</h3>
            <p> Please sign Up</p>
            <form className="form d-flex ai-center jc-center">
              <label>FullName</label>
              <input type="text" placeholder="FullName"
              />
              <label>Date of birth</label>
              <input type="date" placeholder="D.O.B"
              />
              <label>Email</label>
              <input type="email" placeholder="email" /> 
              <label>Password</label>
              <input type="password" placeholder="password"
              />
              <button className="submit">Sign Up</button>
            </form>
          </div>
  )
}

export default SignUp