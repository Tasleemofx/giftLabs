import React from 'react'

const SignIn = () => {
  return (
    <div className="d-flex ai-center jc-center">
            <h3>Already have an account?</h3>
            <p> Please sign In</p>
            <form className="form d-flex ai-center jc-center">
              <input type="text" placeholder="username"
              />
              <input type="password" placeholder="password"
              />
              <input type="submit" value="LogIn" />
            </form>
          </div>
  )
}

export default SignIn