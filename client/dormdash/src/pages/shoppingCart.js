import './main.css';
import * as React from "react";


const shoppingCart = () => {
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
      <form>
        <div class = "complete-history">
          <div class = "shopping-cart-container">
            <div class = "shopping-cart">
              <h1 class = "shopping-cart-group-heading">
                Order 11/30/2021 19:45:00 EST
                <span class = "in-progress-icon">
                  <span class = "material-icons">
                    check_circle
                  </span>
                </span>
              </h1>
              <h2 class = "shopping-cart-group-status-subheading">
                Incomplete
              </h2>
            <h2 class = "shopping-cart-group-location-subheading">
              Holy Grounds @ CEER
            </h2>
            </div>
            <table class = "shopping-cart-table">
              <tr>
                <th class = "shopping-cart-header">Item</th>
                <th class = "shopping-cart-header">Quantity</th>
                <th class = "shopping-cart-header">Price</th>
                <th class = "shopping-cart-header">Option</th>
              </tr>
              <tr>
                <td class = "shopping-cart-row">Bruschetta</td>
                <td class = "shopping-cart-row">1</td>
                <td class = "shopping-cart-row">$12.90</td>
                <td class = "shopping-cart-row">
                  <button>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td class = "shopping-cart-row">Bruschetta</td>
                <td class = "shopping-cart-row">1</td>
                <td class = "shopping-cart-row">$12.90</td>
                <td class = "shopping-cart-row">
                  <button>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td class = "shopping-cart-row">Bruschetta</td>
                <td class = "shopping-cart-row">1</td>
                <td class = "shopping-cart-row">$12.90</td>
                <td class = "shopping-cart-row">
                  <button>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td class = "shopping-cart-row">Bruschetta</td>
                <td class = "shopping-cart-row">1</td>
                <td class = "shopping-cart-row">$12.90</td>
                <td class = "shopping-cart-row">
                  <button>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td class = "shopping-cart-row">Bruschetta</td>
                <td class = "shopping-cart-row">1</td>
                <td class = "shopping-cart-row">$12.90</td>
                <td class = "shopping-cart-row">
                  <button>
                    Remove
                  </button>
                </td>
              </tr>
            </table>
            <div class = "delivery-metadata">
              <div class = "shopping-cart-total-cost">
                <h3>
                  Total: $64.50
                </h3>
              </div>
              <div class = "shopping-cart-delivery-method">
                <h3>
                  Delivery Options:
                </h3>
                <select class = "form__input" autofocus placeholder = "Delivery Method">
                  <option value="" disabled selected>Select a delivery method</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Pick Up">Pick Up</option>
                </select>
              </div>
              <div class = "shopping-cart-delivery-time">
                <h3>
                  Scheduled for delivery method at:
                </h3>
                <input type = "radio" id = "time1" name = "delivery_time1" value = "time1" class = "time-change-buttons"/>
                <label for = "time1" class = "radio-input-label">20:00:00 EST</label>
                <input type = "radio" id = "time2" name = "delivery_time1" value = "time2" class = "time-change-buttons"/>
                <label for = "time2" class = "radio-input-label">20:05:00 EST</label>
                <input type = "radio" id = "time3" name = "delivery_time1" value = "time3" class = "time-change-buttons"/>
                <label for = "time3" class = "radio-input-label">20:10:00 EST</label>
                <input type = "radio" id = "time4" name = "delivery_time1" value = "time4" class = "time-change-buttons"/>
                <label for = "time4" class = "radio-input-label">20:15:00 EST</label>
              </div>
              <h2 class = "shopping-cart-group-location-subheading">
                Holy Grounds @ Connelly Center
              </h2>
              </div>
              <table class = "shopping-cart-table">
                <tr>
                  <th class = "shopping-cart-header">Item</th>
                  <th class = "shopping-cart-header">Quantity</th>
                  <th class = "shopping-cart-header">Price</th>
                  <th class = "shopping-cart-header">Option</th>
                </tr>
                <tr>
                  <td class = "shopping-cart-row">Bruschetta</td>
                  <td class = "shopping-cart-row">1</td>
                  <td class = "shopping-cart-row">$12.90</td>
                  <td class = "shopping-cart-row">
                    <button>
                      Remove
                    </button>
                  </td>
                </tr>
              </table>
              <div class = "delivery-metadata">
                <div class = "shopping-cart-total-cost">
                  <h3>
                    Total: $12.90
                  </h3>
                </div>
                <div class = "shopping-cart-delivery-method">
                  <h3>
                    Delivery Options:
                  </h3>
                  <select class = "form__input" autofocus placeholder = "Delivery Method">
                    <option value="" disabled selected>Select a delivery method</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Pick Up">Pick Up</option>
                  </select>
                </div>
                <div class = "shopping-cart-delivery-time">
                  <h3>
                    Scheduled for delivery method at:
                  </h3>
                  <input type = "radio" id = "time5" name = "delivery_time2" value = "time5" class = "time-change-buttons"/>
                  <label for = "time5" class = "radio-input-label">20:00:00 EST</label>
                  <input type = "radio" id = "time6" name = "delivery_time2" value = "time6" class = "time-change-buttons"/>
                  <label for = "time6" class = "radio-input-label">20:05:00 EST</label>
                  <input type = "radio" id = "time7" name = "delivery_time2" value = "time7" class = "time-change-buttons"/>
                  <label for = "time7" class = "radio-input-label">20:10:00 EST</label>
                  <input type = "radio" id = "time8" name = "delivery_time2" value = "time8" class = "time-change-buttons"/>
                  <label for = "time8" class = "radio-input-label">20:15:00 EST</label>
                </div>

              <div class = "shopping-cart-payment-method">
                <h2>
                  Order Grand Total: $77.40
                </h2>
                <h3>
                  Pay with:
                </h3>
                <input type = "radio" id = "CreditCard_new" name = "payment_details" value = "New Credit Card Details" class = "payment-change-buttons"/>
                <label for = "CreditCard_new" class = "radio-input-label">New Credit Card Details</label>

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

                <input type = "radio" id = "OnlineVendor_new" name = "payment_details" value = "New Online Vendor Details" class = "payment-change-buttons"/>
                <label for = "OnlineVendor_new" class = "radio-input-label">New Online Vendor Details</label>
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

                <input type = "radio" id = "CreditCard_existing" name = "payment_details" value = "Existing Credit Card Details" class = "payment-change-buttons"/>
                <label for = "CreditCard_existing" class = "radio-input-label">Existing Credit Card Details</label>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Credit Card Name">
                    <option value="" disabled selected>Select an Credit Card</option>
                  </select>
                </div>

                <input type = "radio" id = "OnlineVendor_existing" name = "payment_details" value = "Existing Online Vendor Details" class = "payment-change-buttons"/>
                <label for = "OnlineVendor_existing" class = "radio-input-label">Existing Online Vendor Details</label>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Vendor Name">
                    <option value="" disabled selected>Select a Vendor</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class = "form__button" type = "submit" id = "submitOrder">
          Submit Order
        </button>
      </form>
    </body>
  </div>
  )
};

export default shoppingCart
