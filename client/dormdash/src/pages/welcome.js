import './welcome.css';
import * as React from "react";


const welcome = () => {
  return (
  <body>
    <div className = "container">

      <form className = "form" id = "login" >
        <h1 className = "form__title">
          Login to DormDash
        </h1>
        <div className = "form__message--error">
        </div>
        <div className = "form__input-group">
          <input type = "username" className = "form__input" autofocus placeholder = "DormDash Username">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "password" className = "form__input" autofocus placeholder = "DormDash Password">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <button className = "form__button" type = "submit">
          Login
        </button>
        <p className = "form__text">
          <a href = "forgotPassword" className = "form__link">
            Forgot password?
          </a>
        </p>
        <p className = "form__text">
          <a className = "form__link" href = "./createAccount" id = "linkCreateAccount">
            New to DormDash? Create an Account.
          </a>
        </p>
      </form>
    </div>

  </body>
  )
};

export default welcome
