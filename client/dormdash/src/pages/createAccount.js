import './main.css';
import React, {useState} from 'react';
import Axios from 'axios';

const createAccount = () => {
  const [data, setData] = useState('');
  const url = "http://localhost:3001/api/signup";  

    // first_name: "",
    //   middle_name: "",
    //   last_name: "",
    //   buiding_id: "2",
    //   room_num: "",
    //   phone: "",
    //   email: ""
  
  function submit(e){
    console.log(data);
  
    e.preventDefault();
      Axios.post(url, {
        first_name : data.first_name,
        middle_name : data.middle_name,
        last_name: data.last_name,
        building_id: parseInt(data.buiding_id),
        room_num : data.room_num,
        phone : parseInt(data.phone),
        email : data.email
      }).then(res => {
        console.log(res.data);
      }
      )         
  }

  function handle(e) {
    const newData  = { ...data};
    newData[e.target.id] = e.target.value;
    setData(newData); 
    console.log(newData);  
  }


  return (
  <body>
    <div className = "container">

      <form className = "form" id = "getPersonalInfo" onSubmit={(e) => submit(e)} action = "./getAddress" >
        <h1 className = "form__title">
          Create a DormDash Account
        </h1>
        <div className = "form__message--error">
        </div>
        <div className = "form__input-group">
          <input type = "username" className = "form__input" autofocus placeholder = "DormDash Username" id = "username">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "password" className = "form__input" autofocus placeholder = "DormDash Password" id = "password">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input onChange={(e) => handle(e)} value = {data.first_name} type = "text" className = "form__input" autofocus placeholder = "First Name" id = "first_name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input onChange={(e) => handle(e)} value = {data.middle_name} type = "text" className = "form__input" autofocus placeholder = "Middle Name" id = "middle_name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input onChange={(e) => handle(e)} value = {data.last_name} type = "text" className = "form__input" autofocus placeholder = "Last Name" id = "last_name">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input onChange={(e) => handle(e)} value = {data.email} type = "email" className = "form__input" autofocus placeholder = "Email Address" id = "email">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input onChange={(e) => handle(e)} value = {data.phone} type = "tel" className = "form__input" autofocus placeholder = "Phone Number" id = "phone">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <select onChange={(e) => handle(e)} value = {data.building_id} className = "form__input" autofocus placeholder = "Building" id ="buiding_id">
            <option value="0" disabled selected>Select a Dorm Building</option>
            <option value = "1">Alumni Hall</option>
            <option value = "2">Austin Hall</option>
            <option value = "3">Corr Hall</option>
            <option value = "4">Delurey Hall</option>
            <option value = "5">Fedigan Hall</option>
            <option value = "6">Moriarty Hall</option>
            <option value = "7">O'Dwyer Hall</option>
            <option value = "8">Sheehan Hall</option>
            <option value = "9">Simpson Hall</option>
            <option value = "10">Sullivan's Hall</option>
            <option value = "11">St. Rita's Hall</option>
            <option value = "12">Caughlin Hall</option>
            <option value = "13">Good Counsel Hall</option>
            <option value = "14">McGuire Hall</option>
            <option value = "15">Stanford Hall</option>
            <option value = "16">Katharine Hall</option>
            <option value = "17">St. Monica Hall</option>
            <option value = "18">Farley Hall</option>
            <option value = "19">Gallen Hall</option>
            <option value = "20">Jackson Hall</option>
            <option value = "21">Klekotka Hall</option>
            <option value = "22">Moulden Hall</option>
            <option value = "23">Rudolph Hall</option>
            <option value = "24">St. Clare Hall</option>
            <option value = "25">St. Mary's Hall</option>
            <option value = "26">Welsh Hall</option>
            <option value = "27">Arch Hall</option>
            <option value = "28">Trinity Hall</option>
            <option value = "29">Canon Hall</option>
            <option value = "30">Chapter Hall</option>
            <option value = "31">Cupola Hall</option>
            <option value = "32">Friar Hall</option>
          </select>
          <div className = "form__input-error-message">
          </div>
        </div>
        <div className = "form__input-group">
          <input type = "text" onChange={(e) => handle(e)} value = {data.room_num} className = "form__input" autofocus placeholder = "Room Number" id = "room_num">
          </input>
          <div className = "form__input-error-message">
          </div>
        </div>
        <button className = "form__button" id = "getPersonalInfoButton">
          Continue
        </button>
        <p className = "form__text">
          <a className = "form__link" href = "./login" id = "linkLogin">
            Have an Account? Login.
          </a>
        </p>
      </form>
    </div>

  </body>
  )
};

export default createAccount;
