import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
ChartJS.register(ArcElement, Tooltip, Legend);


export function Trial5() {


    const [pay,setPay]=useState(0)

     const data = [
        ["Payment", "Amount"],
        ["Card cost", 17841],
        ["Cash", 367458.58],
        ["Online", 117236.71],
        ["Partial", 25751.99],
        ["Card", 892049.93],
      ];
      const options = {
        title: "Payment Analysis",
        is3D: true,
      };
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5000/payment',
          headers: { }
        };
        
        async function makeRequest() {
          try {
            const response = await axios.request(config);
            console.log((response.data));
            setPay(response.data)
            // setData(response.data)
            
          }
          catch (error) {
            console.log(error);
          }
        }
        
        makeRequest();
        
    }, [])

  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"550px"}
    height={"400px"}
  />
  );
}
