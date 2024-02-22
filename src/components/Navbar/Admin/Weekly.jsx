import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Radio from '@mui/material/Radio';
import {Line} from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
export default function Weekly() {
    const [weekly,setWeekly]=useState([]);
    const [transaction, setTransaction] = useState();
    const [dailyfinal,setDailyfinal]=useState([0])
    const [dailytrans,setDailytrans]=useState([0])
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };  
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5000/weekly',
          headers: { }
        };
        
        async function makeRequest() {
          try {
            const response = await axios.request(config);
            console.log((response.data));
          
         
            setWeekly(response.data.weekends);
            setTransaction(response.data.transactions)
            console.log(response.data.transactions);
             //   let ctr=0;
          //   for (let i = 0; i < response.data.length; i+=1)
          //    {
          //       // let v=response.data[i].final_total+response.data[i+1].final_total+response.data[i+2].final_total
          //       // console.log(v);
          //       // dailyfinal.push(v)
          //       // v=response.data[i].transactions+response.data[i+1].transactions+response.data[i+2].transactions
          //       // dailytrans.push(v)
          //       dailyfinal[ctr]=response.data[i].final_total;
          //       dailytrans[ctr]=response.data[i].transactions;
          //     ctr++;
          //   // }
            
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
                    label: 'Weekly Income' ,
                    data:  weekly,
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor:"rgb(171,135,125)",
                    tension: 0.1
                }
               

            ]};
            const data2= {
                labels: [],
                datasets: [
                    {
                        label: 'Weekly Transactions',
                        data:  transaction,
                        fill: true,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        backgroundColor:"rgb(60, 110, 80)"
                    }
                   
                ]};
                
        
    
    
  return (
    <div>

    {weekly?<>
    <Bar width={400} data={data} style={{
            marginLeft: '30px',
            borderColor:'rgb(171,135,125)',
           }}/>
            <Bar width={400} data={data2} style={{
            marginLeft: '30px'
           }}/>
       
        
        </>:<></> }
       
        

    </div>
  )
}
