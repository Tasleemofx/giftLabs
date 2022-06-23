import React from 'react'
import "../Styles/SignIn.css"

const SignIn = () => {
  return (
    <section className="sign-in d-flex ai-center jc-center">
      <div className="d-flex ai-center jc-center">
            <h3>Already have an account?</h3>
            <p> Please sign In</p>
            <form className="form d-flex ai-center jc-center">
              <input type="text" placeholder="username"
              />
              <input type="password" placeholder="password"
              />
              <button className="submit">Log In</button>
            </form>
      </div>
    </section>
  )
}

export default SignIn