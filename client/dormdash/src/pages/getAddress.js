import './welcome.css';
import * as React from "react";

const createAccount = () => {
  return (
  <body>
    <div className = "container">
      <form className = "form" id = "createAccount" action = "./welcome">
        <h1 className = "form__title">
          Create a DormDash Account
        </h1>
        <div className = "form__message--error">
        </div>
        <div className = "form__input-group">
          <input type = "address" className = "form__input" autofocus placeholder = "Street Address">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "address" className = "form__input" autofocus placeholder = "Address Line 2">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "City">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <select className = "form__input" autofocus placeholder = "State">
            <option value="" disabled selected>Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className = "form__input-group">
          <input type = "zip" className = "form__input" autofocus placeholder = "Zip Code">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <select className = "form__input" autofocus placeholder = "Address Type">
            <option value="" disabled selected>Select an Address Type</option>
            <option value="Billing">Billing</option>
            <option value="Shipping">Shipping</option>
            <option value="Billing and Shipping">Both</option>
          </select>
        </div>
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "Address Name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <button className = "form__button" type = "submit" id = "submitButton">
          Submit and Continue to Login
        </button>
        <p className = "form__text">
          <a className = "form__link" href = "./welcome" id = "linkLogin">
            Have an Account? Login.
          </a>
        </p>
      </form>
    </div>

  </body>
  )
};

export default createAccount
