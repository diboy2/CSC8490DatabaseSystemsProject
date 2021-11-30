import './main.css';
import * as React from "react";


const customer = () => {
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
        <a herf = "./customer">
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
      <div>

        <input type = "radio" id = "AddCreditCard" name = "payment_details_added" value = "New Credit Card Details" class = "form-change-buttons"/>
        <label for = "CreditCard" class = "radio-input-label">New Credit Card Details</label>
        <input type = "radio" id = "AddOnlineVendor" name = "payment_details_added" value = "New Online Vendor Details" class = "form-change-buttons"/>
        <label for = "OnlineVendor" class = "radio-input-label">New Online Vendor Details</label>

        <div class = "change-information-container">
          <div className = "container">
            <form className = "form" id = "addCreditCardInformation">
              <h1 className = "form__title">
                Add New Credit Card Payment Details
              </h1>
              <button className = "form__button" id = "addressButton">
                Submit
              </button>
            </form>
          </div>

          <div className = "container">
            <form className = "form" id = "addVendorInformation">
              <h1 className = "form__title">
                Add New Online Vendor Payment Details
              </h1>
              <button className = "form__button" type = "submit" id = "submitButton">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div>

          <input type = "radio" id = "EditCreditCard" name = "payment_details_edited" value = "Update Credit Card Details" class = "form-change-buttons"/>
          <label for = "CreditCard" class = "radio-input-label">Edit Credit Card Details</label>
          <input type = "radio" id = "EditOnlineVendor" name = "payment_details_edited" value = "Update Online Vendor Details" class = "form-change-buttons"/>
          <label for = "OnlineVendor" class = "radio-input-label">Edit Online Vendor Details</label>

          <div className = "container">
            <form className = "form" id = "editCreditCardInformation">
              <h1 className = "form__title">
                Edit Existing Credit Card Payment Details
              </h1>
              <button className = "form__button" type = "submit" id = "submitButton">
                Submit Changes
              </button>
            </form>
          </div>

          <div className = "container">
            <form className = "form" id = "editVendorDetailsInformation">
              <h1 className = "form__title">
                Edit Existing Vendor Details Payment Details
              </h1>
              <button className = "form__button" type = "submit" id = "submitButton">
                Submit Changes
              </button>
            </form>
          </div>
        </div>

      </div>
    </body>
  </div>

  )
};

export default customer
