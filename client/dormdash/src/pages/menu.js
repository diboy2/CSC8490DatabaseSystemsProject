import './main.css';
import * as React from "react";


const menu = () => {
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
          <a href = "./shopping_cart">
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
            <div class="menu-group">
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
            </div>
            <h2 class="menu-group-heading">
              Dessert
            </h2>
            <div class="menu-group">
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
            </div>
            <h2 class="menu-group-heading">
              Convenience
            </h2>
            <div class="menu-group">
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
            </div>
            <h2 class="menu-group-heading">
              Other
            </h2>
            <div class="menu-group">
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                    <span class="menu-item-name">Bruschetta</span>
                    <span class="menu-item-price">$12.90</span>
                  </h3>
                  <p class="menu-item-description">
                    Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                    congue eu mauris nec, pretium tincidunt nulla.
                  </p>
                  <label for = "quantity">Quantity: </label>
                  <input type = "number" id = "quantity" name = "quantity" min = "0" max = "5"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className = "form__button" type = "submit">
          Add to Cart
        </button>
      </form>
    </body>
  </div>

  )
};

export default menu
