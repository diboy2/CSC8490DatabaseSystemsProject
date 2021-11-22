import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import {Bar} from 'react-chartjs-2';


function Report() {
  const [state, setState] = useState("");
  const [freq, setFreq] = useState("");

  // const getStateData = () => {
    Axios.get('http://localhost:3001/api/admin').then((response) => {
    
      const states = [];
      const freq = [];

      for (let i of response.data) {               
        states.push(i[0]);
        freq.push(i[1]);
      }
       
      setState(states);
      setFreq(freq);
      
      console.log(states);
    }
    );
  // };

  // getStateData();


  return (
    <div>
 
        <Bar
          data= {{
              labels: state,
              datasets: [
                {
                  label: 'Count of Customers by state',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: freq
                }
              ]
            }}
          options={{
            maintainAspectRatio : false,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = {400}
          width = {600}
        />
      </div>
  );
}

export default Report;
