import "./main.css";
import * as React from "react";

import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  Link } from 'gatsby';
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';


const customer = () => {

  const onClick1 = () => {
  var btn_add_cc = document.getElementById("addCreditCardInformation_container");
  var btn_add_v = document.getElementById("addVendorInformation_container");
  var btn_edit_cc = document.getElementById("editCreditCardInformation_container");
  var btn_edit_v = document.getElementById("editVendorDetailsInformation_container");
  if (btn_add_cc.hidden == true) {
    btn_add_cc.hidden = false;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  } else {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  }}

  const onClick2 = () => {
  var btn_add_cc = document.getElementById("addCreditCardInformation_container");
  var btn_add_v = document.getElementById("addVendorInformation_container");
  var btn_edit_cc = document.getElementById("editCreditCardInformation_container");
  var btn_edit_v = document.getElementById("editVendorDetailsInformation_container");
  if (btn_add_v.hidden == true) {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = false;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  } else {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  }}

  const onClick3 = () => {
  var btn_add_cc = document.getElementById("addCreditCardInformation_container");
  var btn_add_v = document.getElementById("addVendorInformation_container");
  var btn_edit_cc = document.getElementById("editCreditCardInformation_container");
  var btn_edit_v = document.getElementById("editVendorDetailsInformation_container");
  if (btn_edit_cc.hidden == true) {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = false;
    btn_edit_v.hidden = true;
  } else {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  }}

  const onClick4 = () => {
  var btn_add_cc = document.getElementById("addCreditCardInformation_container");
  var btn_add_v = document.getElementById("addVendorInformation_container");
  var btn_edit_cc = document.getElementById("editCreditCardInformation_container");
  var btn_edit_v = document.getElementById("editVendorDetailsInformation_container");
  if (btn_edit_v.hidden == true) {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = false;
  } else {
    btn_add_cc.hidden = true;
    btn_add_v.hidden = true;
    btn_edit_cc.hidden = true;
    btn_edit_v.hidden = true;
  }}

  const onClick5 = () => {
  var btn_new_cc_existing_address = document.getElementById("new_cc_existing_address");
  var btn_new_cc_new_address = document.getElementById("new_cc_new_address");
  if (btn_new_cc_existing_address.hidden == true) {
    btn_new_cc_existing_address.hidden = false;
    btn_new_cc_new_address.hidden = true;
  } else {
    btn_new_cc_existing_address.hidden = true;
    btn_new_cc_new_address.hidden = true;
  }}
  const onClick6 = () => {
  var btn_new_cc_existing_address = document.getElementById("new_cc_existing_address");
  var btn_new_cc_new_address = document.getElementById("new_cc_new_address");
  if (btn_new_cc_new_address.hidden == true) {
    btn_new_cc_new_address.hidden = false;
    btn_new_cc_existing_address.hidden = true;
  } else {
    btn_new_cc_new_address.hidden = true;
    btn_new_cc_existing_address.hidden = true;
  }}

  const onClick7 = () => {
  var btn_new_v_existing_email = document.getElementById("new_v_existing_email");
  var btn_new_v_new_email = document.getElementById("new_v_new_email");
  if (btn_new_v_new_email.hidden == true) {
    btn_new_v_new_email.hidden = false;
    btn_new_v_existing_email.hidden = true;
  } else {
    btn_new_v_new_email.hidden = true;
    btn_new_v_existing_email.hidden = true;
  }}

  const onClick8 = () => {
  var btn_new_v_new_email = document.getElementById("new_v_new_email");
  var btn_new_v_existing_email = document.getElementById("new_v_existing_email");
  if (btn_new_v_existing_email.hidden == true) {
    btn_new_v_existing_email.hidden = false;
    btn_new_v_new_email.hidden = true;
  } else {
    btn_new_v_existing_email.hidden = true;
    btn_new_v_new_email.hidden = true;
  }}

  const onClick9 = () => {
  var btn_edit_cc_existing_address = document.getElementById("edit_cc_existing_address");
  var btn_edit_cc_new_address = document.getElementById("edit_cc_new_address");
  if (btn_edit_cc_existing_address.hidden == true) {
    btn_edit_cc_existing_address.hidden = false;
    btn_edit_cc_new_address.hidden = true;
  } else {
    btn_edit_cc_existing_address.hidden = true;
    btn_edit_cc_new_address.hidden = true;
  }}
  const onClick10 = () => {
  var btn_edit_cc_existing_address = document.getElementById("edit_cc_existing_address");
  var btn_edit_cc_new_address = document.getElementById("edit_cc_new_address");
  if (btn_edit_cc_new_address.hidden == true) {
    btn_edit_cc_new_address.hidden = false;
    btn_edit_cc_existing_address.hidden = true;
  } else {
    btn_edit_cc_new_address.hidden = true;
    btn_edit_cc_existing_address.hidden = true;
  }}

  const onClick11 = () => {
  var btn_edit_v_existing_email = document.getElementById("edit_v_existing_email");
  var btn_edit_v_new_email = document.getElementById("edit_v_new_email");
  if (btn_edit_v_new_email.hidden == true) {
    btn_edit_v_new_email.hidden = false;
    btn_edit_v_existing_email.hidden = true;
  } else {
    btn_edit_v_new_email.hidden = true;
    btn_edit_v_existing_email.hidden = true;
  }}

  const onClick12 = () => {
  var btn_edit_v_new_email = document.getElementById("edit_v_new_email");
  var btn_edit_v_existing_email = document.getElementById("edit_v_existing_email");
  if (btn_edit_v_existing_email.hidden == true) {
    btn_edit_v_existing_email.hidden = false;
    btn_edit_v_new_email.hidden = true;
  } else {
    btn_edit_v_existing_email.hidden = true;
    btn_edit_v_new_email.hidden = true;
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
         <Link to= "/welcome">
            <button type = "button" class = "icon-button">
              <span class = "material-icons md-48">
                home
              </span>
            </button>
          </Link>
          <Link to= "/login">
            <button type = "button" class = "icon-button">
              <span class = "material-icons md-48">
                logout
              </span>
            </button>
          </Link>
          <Link to= "/customer">
            <button type = "button" class = "icon-button">
              <span class = "material-icons md-48">
                account_circle
              </span>
            </button>
          </Link>
          <div>
            <Link to= "/shoppingCart">
              <button type = "button" class = "icon-button">
                <span class = "material-icons md-48">
                  shopping_cart
                </span>
                <span class = "icon-button__badge">
                  0
                </span>
              </button>
            </Link>
        </div>
      </div>

      <div class = "extra-customer-buttons">
        <Link to = "/paymentInformation">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              credit_card
            </span>
          </button>
        </Link>
        <Link to = "/orderHistory">
          <button type = "button" class = "icon-button">
            <span class = "material-icons md-48">
              history
            </span>
          </button>
        </Link>
      </div>
      <div class = "change-information-container">
        <input type = "radio" id = "AddCreditCard" name = "payment_details_edited" value = "AddCreditCard" class = "form-change-buttons" onClick = {onClick1}/>
        <label for = "AddCreditCard" class = "radio-input-label">New Credit Card Details</label>
          <div class = "container" id = "addCreditCardInformation_container" hidden>
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
              <input type = "radio" id = "existingAddress" name = "address_option_new" value = "existingAddress" class = "form-change-buttons" onClick = {onClick5}/>
              <label for = "existingAddress" class = "radio-input-label">Use Existing Address</label>
              <div id = "new_cc_existing_address" hidden>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Address">
                    <option value="" disabled selected>Select an Address</option>
                  </select>
                </div>
              </div>
              <input type = "radio" id = "newAddress" name = "address_option_new" value = "newAddress" class = "form-change-buttons" onClick = {onClick6}/>
              <label for = "newAddress" class = "radio-input-label">Add New Address</label>
              <div id = "new_cc_new_address" hidden>
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
              </div>
              <button class = "form__button" type = "submit" id = "submitNewCreditCardButton">
                Submit
              </button>
            </form>
          </div>

        <input type = "radio" id = "AddOnlineVendor" name = "payment_details_edited" value = "AddOnlineVendor" class = "form-change-buttons" onClick = {onClick2}/>
        <label for = "AddOnlineVendor" class = "radio-input-label">New Online Vendor Details</label>
          <div class = "container" id = "addVendorInformation_container" hidden>
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
              <input type = "radio" id = "use_new_Email" name = "email_option_new_vendor" value = "use_new_Email" class = "form-change-buttons" onClick = {onClick7}/>
              <label for = "use_new_Email" class = "radio-input-label">New Email Address</label>
              <div id = "new_v_new_email" hidden>
                <div class = "form__input-group">
                  <input type = "email" class = "form__input" autofocus placeholder = "New Email Address">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
              </div>
              <input type = "radio" id = "use_existing_Email" name = "email_option_new_vendor" value = "use_existing_Email" class = "form-change-buttons" onClick = {onClick8}/>
              <label for = "use_existing_Email" class = "radio-input-label">Existing Email Address</label>
              <div id = "new_v_existing_email" hidden>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Vendor Name">
                    <option value="" disabled selected>Select an Email Address</option>
                  </select>
                </div>
              </div>
              <button class = "form__button" type = "submit" id = "submitNewOnlineVendorButton">
                Submit
              </button>
            </form>
          </div>

        <input type = "radio" id = "EditCreditCard" name = "payment_details_edited" value = "EditCreditCard" class = "form-change-buttons" onClick = {onClick3}/>
        <label for = "EditCreditCard" class = "radio-input-label">Edit Credit Card Details</label>
          <div class = "container" id = "editCreditCardInformation_container" hidden>
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
                <input type = "radio" id = "useExistingAddress_edit" name = "address_option_edit" value = "useExistingAddress_edit" class = "form-change-buttons" onClick = {onClick9}/>
                <label for = "useExistingAddress_edit" class = "radio-input-label">Use Existing Address</label>
                <div id = "edit_cc_existing_address" hidden>
                  <div class = "form__input-group">
                    <select class = "form__input" autofocus placeholder = "Address">
                      <option value="" disabled selected>Select an Address</option>
                    </select>
                  </div>
                </div>
                <input type = "radio" id = "newAddress_edit" name = "address_option_edit" value = "newAddress_edit" class = "form-change-buttons" onClick = {onClick10}/>
                <label for = "newAddress_edit" class = "radio-input-label">Add New Address</label>
                <div id = "edit_cc_new_address" hidden>
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
                </div>
              <button class = "form__button" type = "submit" id = "submitEditCreditCardButton">
                Submit Changes
              </button>
            </form>
          </div>

        <input type = "radio" id = "EditOnlineVendor" name = "payment_details_edited" value = "EditOnlineVendor" class = "form-change-buttons" onClick = {onClick4}/>
        <label for = "EditOnlineVendor" class = "radio-input-label">Edit Online Vendor Details</label>
          <div class = "container" id = "editVendorDetailsInformation_container" hidden>
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
              <input type = "radio" id = "New_Email_Address" name = "email_option" value = "New_Email_Address" class = "form-change-buttons" onClick = {onClick11}/>
              <label for = "New_Email_Address" class = "radio-input-label">New Email Address</label>
              <div id = "edit_v_new_email" hidden>
                <div class = "form__input-group">
                  <input type = "email" class = "form__input" autofocus placeholder = "New Email Address">
                  </input>
                  <div class = "form__input-error-message">
                  </div>
                </div>
              </div>
              <input type = "radio" id = "Existing_Email_Address" name = "email_option" value = "Existing_Email_Address" class = "form-change-buttons" onClick = {onClick12}/>
              <label for = "Existing_Email_Address" class = "radio-input-label">Existing Email Address</label>
              <div id = "edit_v_existing_email" hidden>
                <div class = "form__input-group">
                  <select class = "form__input" autofocus placeholder = "Vendor Name">
                    <option value="" disabled selected>Select an Email Address</option>
                  </select>
                </div>
              </div>
              <button class = "form__button" type = "submit" id = "submitEditOnlineVendorButton">
                Submit
              </button>
            </form>
          </div>
        </div>
    </body>
  </div>

  )
};

export default customer
