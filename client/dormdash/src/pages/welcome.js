import './main.css';

import React, {useContext} from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';

const Welcome = () => {
const dispatch = useContext(GlobalDispatchContext);
const state = useContext(GlobalStateContext);

console.log(state);

function updateState(obj){

  dispatch({type : 'ADD_ITEM', payload : obj})    
  console.log(state);
    
  }

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

      <div class="container">
        <div class="dining">
          <h2 class="dining-group-heading">
            St. Mary's Hall
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">St. Mary's Dining Hall</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "1 St. Mary's Hall - Dining_Hall" onClick={e => updateState(e.target.id)}> View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Second Storey</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "2 St. Mary's Hall - Dining_Hall"  onClick = {e => {dispatch({type : 'ADD_ITEM', payload : e.target.id})}}>View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Dougherty Hall
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Dougherty Dining Hall</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "3 Doherty Hall - Dougherty Dining Hall"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Bartley Hall
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">The Curley Exchange</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "4 Bartley Hall - The Curley Exchange"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Holy Grounds</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "5 Bartley Hall - Holy Grounds"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            CEER
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Holy Grounds</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "6 CEER - Holy Grounds"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Connelly Center
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name" >Holy Grounds</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "7 Connelly Hall - Holy Grounds"  onClick = "updateState(this.id)" >View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Belle Air Terrace</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "8 Connelly Hall - Belle Air Terrace"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Freshens</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "9 Connelly Hall - Freshens"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Connelly Convenience</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "10 Connelly Hall - Connelly Convenience"  onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Driscoll Hall
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">The Recovery Room</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "11 Driscoll Hall - The Recovery Room" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Cafe Nova
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Cafe Nova</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "12 Cafe Nova - Cafe Nova" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Falvey Memorial Library
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Holy Grounds</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "13 Falvey Memorial Library - Holy Grounds" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            St. Augustine Center for the Liberal Arts
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">St. Augustine Cafe</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "14 St. Augustine Center for the liberal arts - St Augustine Cafe" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Donahue Hall
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">The Court</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "15 Donahue Hall - The Court" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Donahue Market</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "16 Donahue Hall - Donahue Market" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            The Commons
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Holy Grounds</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "17 The Commons - Holy Grounds" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="dining">
          <h2 class="dining-group-heading">
            Law School
          </h2>
          <div class="dining-group">
            <div class="dining-item">
              <div class="dining-item-text">
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">The Law School Cafe</span>
                  <a href = "./menu">
                    <button class="dining-menu-button" id = "18 Law School - The Law School Cafe" onClick = "updateState(this.id)">View Menu</button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>

  )
};

export default Welcome
