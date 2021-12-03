import './main.css';
import * as React from "react";

const customer = () => {
  const onClick1 = () => {
  var btn_update_info = document.getElementById("updatePersonalInfo_div");
  var btn_add_address = document.getElementById("addAddressInfo_div");
  var btn_update_address = document.getElementById("updateAddressInfo_div");
  if (btn_update_info.hidden == true) {
    btn_update_info.hidden = false;
    btn_add_address.hidden = true;
    btn_update_address.hidden = true;
  } else {
    btn_update_info.hidden = true;
    btn_add_address.hidden = true;
    btn_update_address.hidden = true;
  }}

  const onClick2 = () => {
  var btn_update_info = document.getElementById("updatePersonalInfo_div");
  var btn_add_address = document.getElementById("addAddressInfo_div");
  var btn_update_address = document.getElementById("updateAddressInfo_div");
  if (btn_add_address.hidden == true) {
    btn_update_info.hidden = true;
    btn_add_address.hidden = false;
    btn_update_address.hidden = true;
  } else {
    btn_update_info.hidden = true;
    btn_add_address.hidden = true;
    btn_update_address.hidden = true;
  }}
  
  const onClick3 = () => {
  var btn_update_info = document.getElementById("updatePersonalInfo_div");
  var btn_add_address = document.getElementById("addAddressInfo_div");
  var btn_update_address = document.getElementById("updateAddressInfo_div");
  if (btn_update_address.hidden == true) {
    btn_update_info.hidden = true;
    btn_add_address.hidden = true;
    btn_update_address.hidden = false;
  } else {
    btn_update_info.hidden = true;
    btn_add_address.hidden = true;
    btn_update_address.hidden = true;
  }}

  return (
  <div>
    <head>
      <style>
        <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
        </link>
      </style>
    </head>

    <div class = "banner">
      <div class = "banner__content">
        <div class = "banner__text">
          DormDash
        </div>
      </div>
    </div>

    <body>
      <div class = "dormdash-menu-buttons">
        <a href = "./welcome">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              home
            </span>
          </button>
        </a>
        <a href = "./login">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              logout
            </span>
          </button>
        </a>
        <a href = "./customer">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              account_circle
            </span>
          </button>
        </a>
        <div>
          <a href = "./shoppingCart">
            <button type = "button" class = "icon-button">
              <span class = "material-icons md-48">
                shopping_cart
              </span>
              <span class = "icon-button__badge">
                0
              </span>
            </button>
          </a>
        </div>
      </div>

      <div class = "extra-customer-buttons">
        <a href = "./paymentInformation">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              credit_card
            </span>
          </button>
        </a>
        <a href = "./orderHistory">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              history
            </span>
          </button>
        </a>
      </div>


      <div class = "change-information-container">
        <input type = "radio" id = "updatePersonInfo_button" name = "update_info_option" value = "updatePersonInfo" onClick = {onClick1} class = "form-change-buttons"/>
        <label for = "updatePersonInfo_button" class = "radio-input-label">Update Personal Information</label>
        <div className = "container" hidden id = "updatePersonalInfo_div">
          <form className = "form" id = "updatePersonalInfo_form">
            <h1 className = "form__title">
              Update Personal Information for DormDash Account
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
            <button className = "form__button" id = "updatePersonalInfoButton">
              Submit Changes
            </button>
          </form>
        </div>

        <input type = "radio" id = "addAddressInfo_button" name = "update_info_option" value = "addAddressInfo" onClick = {onClick2} class = "form-change-buttons"/>
        <label for = "addAddressInfo_button" class = "radio-input-label">Add New Address Information</label>
        <div className = "container" hidden id = "addAddressInfo_div">
          <form className = "form" id = "addAddressInfo">
            <h1 className = "form__title">
              Add Address Information
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
            <button className = "form__button" type = "submit" id = "addAddressInfoButton">
              Submit Changes
            </button>
          </form>
        </div>

        <input type = "radio" id = "updateAddressInfo_button" name = "update_info_option" value = "updateAddressInfo" onClick = {onClick3}  class = "form-change-buttons"/>
        <label for = "updateAddressInfo_button" class = "radio-input-label">Update Existing Address Information</label>
        <div className = "container" hidden id = "updateAddressInfo_div">
          <form className = "form" id = "updateAddressInfo">
            <h1 className = "form__title">
              Update Address Information
            </h1>
            <div className = "form__input-group">
              <select className = "form__input" autofocus placeholder = "Address">
                <option value="" disabled selected>Select an Address to update</option>
              </select>
            </div>
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
            <button className = "form__button" type = "submit" id = "updateAddressInfoButton">
              Submit Changes
            </button>
          </form>
        </div>
      </div>
    </body>
  </div>

  )
};

export default customer
