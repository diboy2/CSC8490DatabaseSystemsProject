import './main.css';
import React, {useContext, useState, useEffect} from 'react'
import Axios from 'axios';
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';
import { MenuContext } from '../context/MenuContext';

import { ShoppingCart } from './shoppingCart' 
import { Customer } from './customer' 
import { Login } from './login' 
import { Welcome } from './welcome' 



import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  Link } from 'gatsby';

export const Menu = () => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  
  const [numbers, setNumbers] = useState("");
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState("");


  function submitCart(){
      console.log(data);    
          for (var key in data){
            console.log('inserting ', key)
           Axios.post('http://localhost:3001/api/shoppingCartInsert',{
            food_id : key,
            quantity : data[key],
             dining_place : state.dining_place,
            shopping_cart_id : state.shopping_cart_id
            }).then(res => {              
            console.log(res.data.rows);                     
             })
          }
    }

          
  
  
  useEffect(() => {
    const d_id = parseInt(state.dining_place.slice(0,2));
    console.log(d_id);
    const url = "http://localhost:3001/api/menu"; 
    Axios.post(url, {
          dining_id : d_id
        }).then(res => { 
        setNumbers(res.data.rows); 
        console.log(res.data.rows);
        setFetched(true);
       })
    console.log("mounted");    
  }, []);

  function handle(e) {
    const newData  = { ...data};
    newData[e.target.id] = e.target.value;
    setData(newData); 
  }
  
  console.log(state);

    return (
      <Router>

      <MenuContext.Provider value = 'Hello from Context'>
                  <Routes>                                        
                    <Route path = '/shoppingCart'> exact component = { ShoppingCart } > </Route>
                    <Route path = '/customer'> exact component = { Customer } > </Route>
                    <Route path = '/customer'> exact component = { Customer } > </Route>
                    <Route path = '/welcome'> exact component = { Welcome } > </Route>
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
        <form>
          <div class="menu-container">
            <div class="menu">
              <h2 class="menu-group-heading">
                Entrée
              </h2>

            
            </div>

              {
               fetched ? (


                numbers.map((item,index)=>{
                 return (  
                <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name" ><i>{ item[2].charAt(0).toUpperCase() + item[2].slice(1) }</i></span>
                    <span class="menu-item-price">${ Math.round(item[1] * 100) / 100} </span>
                  </h3>
                  <p class="menu-item-description">
                    
                  </p>
                  <label for = "quantity"  >Quantity: </label>
                  <input onChange={(e) => handle(e)} type = "number" id = {item[0]} name = "quantity" min = "0" max = "5"/>
                 {"\n"}

                </div> </div>
              )


            }) )
              : <div>  </div>
              }
              
         </div>
        
          <Link to = '/menu'>
          <button className = "form__button" onClick={submitCart}>
            Add to Cart
          </button>
          </Link>
            
        </form>

      </body>
    </div>
    </Router>
    )
  };

export default Menu
