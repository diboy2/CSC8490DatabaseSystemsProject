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
      <div>
      <div>
        <input type = "radio" id = "AddCreditCard" name = "payment_details_added" value = "AddCreditCard" class = "form-change-buttons"/>
        <label for = "AddCreditCard" class = "radio-input-label">New Credit Card Details</label>
          <div class = "change-information-container">
            <div class = "container">
              <form class = "form" id = "addCreditCardInformation">
                <h1 class = "form__title">
                  Add New Credit Card Payment Details
                </h1>

                <div class = "form__message--error">
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Name on Card">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Card Number">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <label for = "exp_month"  class = "expiration_info">Expiration Month: </label>
                  <input type = "number" id = "exp_month" name = "exp_month" min = "1" max = "12"/>
                  <label for = "exp_year"  class = "expiration_info">Expiration Year: </label>
                  <input type = "number" id = "exp_year" name = "exp_year" min = "2021" max = "2040" class = "expiration_info"/>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Security Code">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <input type = "radio" id = "existingAddress" name = "address_option_new" value = "existingAddress" class = "form-change-buttons"/>
                <label for = "existingAddress" class = "radio-input-label">Use Existing Address</label>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Address">
                    <option value="" disabled selected>Select an Address</option>
                  </select>
                </div>
                <input type = "radio" id = "newAddress" name = "address_option_new" value = "newAddress" class = "form-change-buttons"/>
                <label for = "newAddress" class = "radio-input-label">Add New address</label>
                <div class = "form__message--error">
                </div>
                <div class = "form__input-group">
                  <input type = "address" class = "form__input" autofocus placeholder = "Street Address">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "address" class = "form__input" autofocus placeholder = "Address Line 2">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "City">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "State">
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
                <div class = "form__input-group">
                  <input type = "zip" class = "form__input" autofocus placeholder = "Zip Code">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Address Type">
                    <option value="" disabled selected>Select an Address Type</option>
                    <option value="Billing">Billing</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Billing and Shipping">Both</option>
                  </select>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Address Name">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <button class = "form__button" type = "submit" id = "submitNewCreditCardButton">
                  Submit
                </button>
              </form>
            </div>
          </div>


        <input type = "radio" id = "AddOnlineVendor" name = "payment_details_added" value = "AddOnlineVendor" class = "form-change-buttons"/>
        <label for = "AddOnlineVendor" class = "radio-input-label">New Online Vendor Details</label>
          <div class = "container">
            <form class = "form" id = "addVendorInformation">
              <h1 class = "form__title">
                Add New Online Vendor Payment Details
              </h1>
              <div class = "form__input-group">
                <select class = "form__input" autofocus placeholder = "Vendor Name">
                  <option value="" disabled selected>Select a Vendor</option>
                  <option value="Venmo">Venmo</option>
                  <option value="Zelle">Zelle</option>
                  <option value="Paypal">Paypal</option>
                  <option value="CashApp">CashApp</option>
                </select>
              </div>
              <input type = "radio" id = "use_new_Email" name = "email_option_new_vendor" value = "use_new_Email" class = "form-change-buttons"/>
              <label for = "use_new_Email" class = "radio-input-label">New Email Address</label>
              <div class = "form__input-group">
                <input type = "email" class = "form__input" autofocus placeholder = "New Email Address">
                </input>
                <div class = "form__input-error-message">
                </div>
              </div>
              <input type = "radio" id = "use_existing_Email" name = "email_option_new_vendor" value = "use_existing_Email" class = "form-change-buttons"/>
              <label for = "use_existing_Email" class = "radio-input-label">Existing Email Address</label>
              <div class = "form__input-group">
                <select class = "form__input" autofocus placeholder = "Vendor Name">
                  <option value="" disabled selected>Select an Email Address</option>
                </select>
              </div>
              <button class = "form__button" type = "submit" id = "submitNewOnlineVendorButton">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div>

        <input type = "radio" id = "EditCreditCard" name = "payment_details_edited" value = "EditCreditCard" class = "form-change-buttons"/>
        <label for = "EditCreditCard" class = "radio-input-label">Edit Credit Card Details</label>
          <div class = "container">
            <form class = "form" id = "editCreditCardInformation">
              <h1 class = "form__title">
                Edit Existing Credit Card Payment Details
              </h1>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Credit Card">
                    <option value="" disabled selected>Select a Credit Card to Edit</option>
                  </select>
                </div>
                <div class = "form__message--error">
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Name on Card">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Card Number">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <label for = "exp_month"  class = "expiration_info">Expiration Month: </label>
                  <input type = "number" id = "exp_month" name = "exp_month" min = "1" max = "12"/>
                  <label for = "exp_year"  class = "expiration_info">Expiration Year: </label>
                  <input type = "number" id = "exp_year" name = "exp_year" min = "2021" max = "2040" class = "expiration_info"/>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Security Code">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <input type = "radio" id = "useExistingAddress_edit" name = "address_option_edit" value = "useExistingAddress_edit" class = "form-change-buttons"/>
                <label for = "useExistingAddress_edit" class = "radio-input-label">Use Existing Address</label>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Address">
                    <option value="" disabled selected>Select an Address</option>
                  </select>
                </div>
                <input type = "radio" id = "newAddress_edit" name = "address_option_edit" value = "newAddress_edit" class = "form-change-buttons"/>
                <label for = "newAddress_edit" class = "radio-input-label">Add New address</label>
                <div class = "form__message--error">
                </div>
                <div class = "form__input-group">
                  <input type = "address" class = "form__input" autofocus placeholder = "Street Address">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "address" class = "form__input" autofocus placeholder = "Address Line 2">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "City">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "State">
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
                <div class = "form__input-group">
                  <input type = "zip" class = "form__input" autofocus placeholder = "Zip Code">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Address Type">
                    <option value="" disabled selected>Select an Address Type</option>
                    <option value="Billing">Billing</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Billing and Shipping">Both</option>
                  </select>
                </div>
                <div class = "form__input-group">
                  <input type = "text" class = "form__input" autofocus placeholder = "Address Name">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
              <button class = "form__button" type = "submit" id = "submitEditCreditCardButton">
                Submit Changes
              </button>
            </form>
          </div>

          <input type = "radio" id = "EditOnlineVendor" name = "payment_details_edited" value = "EditOnlineVendor" class = "form-change-buttons"/>
          <label for = "EditOnlineVendor" class = "radio-input-label">Edit Online Vendor Details</label>
          <div class = "container">
            <form class = "form" id = "editVendorDetailsInformation">
              <h1 class = "form__title">
                Edit Existing Vendor Details Payment Details
              </h1>
              <div class = "form__input-group">
                <select class = "form__input" autofocus placeholder = "Vendor Details">
                  <option value="" disabled selected>Select existing Vendor Details to edit</option>
                </select>
              </div>
              <div class = "form__input-group">
                <select class = "form__input" autofocus placeholder = "Vendor Name">
                  <option value="" disabled selected>Select a Vendor</option>
                  <option value="Venmo">Venmo</option>
                  <option value="Zelle">Zelle</option>
                  <option value="Paypal">Paypal</option>
                  <option value="CashApp">CashApp</option>
                </select>
              </div>
              <input type = "radio" id = "New_Email_Address" name = "email_option" value = "New_Email_Address" class = "form-change-buttons"/>
              <label for = "New_Email_Address" class = "radio-input-label">New Email Address</label>
              <div class = "form__input-group">
                <input type = "email" class = "form__input" autofocus placeholder = "New Email Address">
                </input>
                <div class = "form__input-error-message">
                </div>
              </div>
              <input type = "radio" id = "Existing_Email_Address" name = "email_option" value = "Existing_Email_Address" class = "form-change-buttons"/>
              <label for = "Existing_Email_Address" class = "radio-input-label">Existing Email Address</label>
              <div class = "form__input-group">
                <select class = "form__input" autofocus placeholder = "Vendor Name">
                  <option value="" disabled selected>Select an Email Address</option>
                </select>
              </div>
              <button class = "form__button" type = "submit" id = "submitEditOnlineVendorButton">
                Submit
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
