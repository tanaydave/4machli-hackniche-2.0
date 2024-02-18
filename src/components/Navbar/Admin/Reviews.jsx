import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Line,Bar} from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
export default function Reviews() {
const [sent,sentSent]=useState([])
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5000/reviews',
          headers: { }
        };
        
        async function makeRequest() {
          try {
            const response = await axios.request(config);
            console.log((response.data.sentiment_value));
            sentSent(response.data)
          }
          catch (error) {
            console.log(error);
          }
        }
        
        makeRequest();
        
    }, [])

    const data = {
        labels: [],
        datasets: [
            {
                label: "Sentiment Analysis",
                data:  sent.sentiment_value,
                fill: false,
                borderColor: 'rgb(171,135,125)',
                backgroundColor:'rgb(171,135,125)',

                tension: 0.1
            }
        ]};

  return (
    <div>
      {sent?<>
      
        <Bar width={270} height={200} data={data} style={{
            marginLeft: '30px'
           }}/>
      
      </>:<></>}
    </div>
  )
}
