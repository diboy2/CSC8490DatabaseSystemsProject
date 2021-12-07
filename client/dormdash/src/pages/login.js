import './main.css';
import React, {useContext} from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';

const Login = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  console.log('i am in login', state);

  
  return (
  <body>
    <div className = "container">

      <form className = "form" id = "login" action = "./welcome">
        <h1 className = "form__title">
          Login to DormDash
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
        <button className = "form__button" type = "submit">
          Login
        </button>
        <p className = "form__text">
          <a href = "forgotPassword" className = "form__link">
            Forgot password?
          </a>
        </p>
        <p className = "form__text">
          <a className = "form__link" href = "./createAccount" id = "linkCreateAccount">
            New to DormDash? Create an Account. {state.dining_place}
          </a>
        
        </p>
      </form>
    </div>

  </body>
  )
};

export default Login
