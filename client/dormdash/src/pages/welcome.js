import './main.css';
import Axios from 'axios';

import React, {useContext, useState, useEffect} from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';

import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  Link } from 'gatsby';
import { MenuContext } from '../context/MenuContext';
import { Menu } from './menu'
import { ShoppingCart } from './shoppingCart' 
import { Customer } from './customer' 
import { OrderHistory } from './orderHistory' 



const Welcome = () => {

const dispatch = useContext(GlobalDispatchContext);
const state = useContext(GlobalStateContext);

const [fetched, setFetched] = useState(false);

console.log('From welcome::',state);

  function updateState(obj){

    dispatch({type : 'ADD_ITEM', payload : obj})    
    console.log(state);
    
  }

  useEffect(() => {
    console.log('From useEffect ', state)
    if( state.shopping_cart_id === 0){
    const url = "http://localhost:3001/api/shoppingCartId"; 
    Axios.get(url).then((response) => {  
      const index = parseInt(response.data) + 1;
      dispatch({type : 'ADD_SC', payload : index});
    }
    );
    }

    console.log(state);
    console.log("mounted");    
  }, []);
  
    

  return (
    <Router>

     <MenuContext.Provider value = 'Hello from Context'>
                  <Routes>
                    <Route path = '/menu'> exact component = { Menu } > </Route>
                    <Route path = '/shoppingCart'> exact component = { ShoppingCart } > </Route>
                    <Route path = '/customer'> exact component = { Customer } > </Route>
                    <Route path = '/orderHistory'> exact component = { OrderHistory } > </Route>
                  </Routes>
                  </MenuContext.Provider>
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

                 

                  <Link to = "/menu/" >    
                          <button class="dining-menu-button" id = "1 St. Mary's Hall - Dining_Hall" onClick={e => updateState(e.target.id)}> View Menu</button>
                  </Link>

     
                  

                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Second Storey</span>
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "2 St. Mary's Hall - Dining_Hall"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
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
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "3 Dohetry Hall - Dougherty Dining Hall"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
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
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "4 Bartley Hall - The Curley Exchange"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                    </Link>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Holy Grounds</span>
                    
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "5 Bartley Hall - Holy Grounds"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                      </Link>
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
                  <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "6 CEER - Holy Grounds"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
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
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "7 Connelly Hall - Holy Grounds"  onClick = {e => updateState(e.target.id)} >View Menu</button>
                    </Link>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Belle Air Terrace</span>
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "8 Connelly Hall - Belle Air Terrace"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                 </Link>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Freshens</span>
                
                 <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "9 Connelly Hall - Freshens"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                </Link>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Connelly Convenience</span>
                  
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "10 Connelly Hall - Connelly Convenience"  onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>

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
                    
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "11 Driscoll Hall - The Recovery Room" onClick = {e => updateState(e.target.id)}>View Menu</button>
                    </Link>
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
                    
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "12 Cafe Nova - Cafe Nova" onClick = {e => updateState(e.target.id)}>View Menu</button>
                    </Link>

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
                     <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "13 Falvey Memorial Library - Holy Grounds" onClick = {e => updateState(e.target.id)}>View Menu</button>
                    </Link>
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
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "14 St. Augustine Center for the liberal arts - St Augustine Cafe" onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
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
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "15 Donahue Hall - The Court" onClick = {e => updateState(e.target.id)}>View Menu</button>
                    </Link>
                </h3>
                <h3 class="dining-item-heading">
                  <span class="dining-item-name">Donahue Market</span>
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "16 Donahue Hall - Donahue Market" onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
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
                
                    <button class="dining-menu-button" id = "17 The Commons - Holy Grounds" onClick = {e => updateState(e.target.id)}>View Menu</button>
               
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
                   <Link to = "/menu/" >   
                    <button class="dining-menu-button" id = "18 Law School - The Law School Cafe" onClick = {e => updateState(e.target.id)}>View Menu</button>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</Router>
  )
};

export default Welcome
