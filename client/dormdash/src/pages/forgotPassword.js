import './main.css';
import * as React from "react";

const forgotPassword = () => {
  return (
  <body>
    <div className = "container">
      <form className = "form" id = "forgotPassword" action = "./login">
        <h1 className = "form__title">
          Reset DromDash Password
        </h1>
        <h3 className = "form__subtitle">
          If you have registered an Account with an email address, you can reset your password here.
        </h3>
        <div className = "form__message--error">
        </div>
        <div className = "form__input-group">
          <input type = "email" className = "form__input" autofocus placeholder = "Email Address">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <button className = "form__button" type = "submit" id = "submitButton">
          Submit and Return to Login page.
        </button>
        <p className = "form__text">
          <a className = "form__link" href = "./createAccount" id = "linkCreateAccount">
            Don't Have an Account? Create one here.
          </a>
        </p>
      </form>
    </div>

  </body>
  )
};

export default forgotPassword
