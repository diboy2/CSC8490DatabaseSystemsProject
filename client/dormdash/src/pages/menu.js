import './main.css';
import React, {useContext, useState, useEffect} from 'react'
import Axios from 'axios';
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';
// 

const Menu = () => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  
  const [numbers, setNumbers] = useState("");
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState("");

  console.log(state);
  
  useEffect(() => {
    const url = "http://localhost:3001/api/menu"; 
    Axios.post(url, {
          dining_id : 1
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
    console.log(newData);  
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
        
    
          <button className = "form__button" type = "submit">
            Add to Cart
          </button>
            
        </form>

      </body>
    </div>

    )
  };

export default Menu
