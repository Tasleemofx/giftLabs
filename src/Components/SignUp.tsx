import React from 'react'

const SignUp = () => {
  return (
    <div className="d-flex ai-center jc-center">
            <h3>I don't have an account</h3>
            <p> Please sign Up</p>
            <form className="form d-flex ai-center jc-center">
              <input type="text" placeholder="FullName"
              />
              <input type="date" placeholder="D.O.B"
              />
              <input type="email" placeholder="email" /> 
              <input type="password" placeholder="password"
              />
              <input type="submit" value="SignUp" />
            </form>
          </div>
  )
}

export default SignUp