import './welcome.css';
import * as React from "react";

const createAccount = () => {
  return (
  <body>
    <div className = "container">
      <form className = "form" id = "createAccount" action = "./getAddress">
        <h1 className = "form__title">
          Create a DormDash Account
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
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "First Name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "Middle Name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "Last Name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "email" className = "form__input" autofocus placeholder = "Email Address">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "tel" className = "form__input" autofocus placeholder = "Phone Number">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <select className = "form__input" autofocus placeholder = "Building">
            <option value="" disabled selected>Select a Dorm Building</option>
            <option value = "Alumni Hall">Alumni Hall</option>
            <option value = "Austin Hall">Austin Hall</option>
            <option value = "Corr Hall">Corr Hall</option>
            <option value = "Delurey Hall">Delurey Hall</option>
            <option value = "Fedigan Hall">Fedigan Hall</option>
            <option value = "Moriarty Hall">Moriarty Hall</option>
            <option value = "O'Dwyer Hall">O'Dwyer Hall</option>
            <option value = "Sheehan Hall">Sheehan Hall</option>
            <option value = "Simpson Hall">Simpson Hall</option>
            <option value = "Sullivan Hall">Sullivan's Hall</option>
            <option value = "St. Rita’s Hall">St. Rita's Hall</option>
            <option value = "Caughlin Hall">Caughlin Hall</option>
            <option value = "Good Counsel Hall">Good Counsel Hall</option>
            <option value = "McGuire Hall">McGuire Hall</option>
            <option value = "Stanford Hall">Stanford Hall</option>
            <option value = "Katharine Hall">Katharine Hall</option>
            <option value = "St. Monica Hall">St. Monica Hall</option>
            <option value = "Farley Hall">Farley Hall</option>
            <option value = "Gallen Hall">Gallen Hall</option>
            <option value = "Jackson Hall">Jackson Hall</option>
            <option value = "Klekotka Hall">Klekotka Hall</option>
            <option value = "Moulden Hall">Moulden Hall</option>
            <option value = "Rudolph Hall">Rudolph Hall</option>
            <option value = "St. Clare Hall">St. Clare Hall</option>
            <option value = "St. Mary's Hall">St. Mary's Hall</option>
            <option value = "Welsh Hall">Welsh Hall</option>
            <option value = "Arch Hall">Arch Hall</option>
            <option value = "Trinity Hall">Trinity Hall</option>
            <option value = "Canon Hall">Canon Hall</option>
            <option value = "Chapter Hall">Chapter Hall</option>
            <option value = "Cupola Hall">Cupola Hall</option>
            <option value = "Friar Hall">Friar Hall</option>
          </select>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "text" className = "form__input" autofocus placeholder = "Room Number">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <button className = "form__button" id = "addressButton">
          Continue
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
