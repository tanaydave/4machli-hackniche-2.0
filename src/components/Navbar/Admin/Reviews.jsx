import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Line,Bar} from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
export default function Reviews() {
const [sent1,setSent1]=useState([])
const [sent2,setSent2]=useState([])
const [sent3,setSent3]=useState([])
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
            console.log((response.data));
            setSent1(response.data.ettara)
            setSent2(response.data.love_latte)
            setSent3(response.data.tea_villa)

          }
          catch (error) {
            console.log(error);
          }
        }
        
        makeRequest();
        
    }, [])
    // console.log(sent.sentiment_value);
    const data = {
        labels: [],
        datasets: [
            {
                label: "Ettarra",
                data:  sent1,
                fill: false,
                borderColor: 'rgb(171,135,125)',
                backgroundColor:'rgb(171,135,125)',

                tension: 0.1
            },
            {
                label: "Tea-Villa",
                data:  sent2,
                fill: false,
                borderColor: 'rgb(171,135,125)',
                backgroundColor:'rgb(255,0,0)',

                tension: 0.1
            },
            {
                label: "Love-Latte",
                data:  sent3,
                fill: false,
                borderColor: 'rgb(171,135,125)',
                backgroundColor:'rgb(7, 31, 245)',

                tension: 0.1
            },

        ]};

  return (
    <div>
      {sent1?<>
      
        <Bar width={270} height={200} data={data} style={{
            marginLeft: '30px'
           }}/>
      
      </>:<></>}
    </div>
  )
}
