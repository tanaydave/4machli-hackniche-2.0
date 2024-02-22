
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { DatePicker, Space } from 'antd';
import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect} from "react";

const { RangePicker } = DatePicker;

const Calendar = () => {
    const [total,setTotal]= useState(0)
    const [trans,setTrans]= useState(0)



    const [data,setData]=useState([])
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5000/daily',
          headers: { }
        };
        
        async function makeRequest() {
          try {
            const response = await axios.request(config);
            console.log((response.data));
            setData(response.data)
            
          }
          catch (error) {
            console.log(error);
          }
        }
        
        makeRequest();
        
    }, [])
    const onChange = (date, dateString) => {
        console.log(date, dateString);
        let start=dateString[0]
        let end=dateString[1]
        console.log(start,end);
        console.log(data);
        let total1=0
        let trans1=0
        let ctr=0
        for(let i=0;i<data.length;i++)
        {
            console.log(data[i].date)
            if(data[i].date==start)
            {
                ctr=1;
            }
            if(ctr==1)
            {
                setTotal(total+data[i].final_total)
                setTrans(trans+data[i].transactions)
                
                total1=total1+data[i].final_total
                trans1=trans1+data[i].transactions
            }
            if(data[i].date==end)
            {
                break;
            }

        }
        // console.log(total1,trans1);
        setTotal(Math.ceil(total1))
        setTrans(trans1)


      };

  return (
    <div className="flex flex-col justify-center items-center py-12 my-4 ">
    <Space direction="vertical" size={20}>
    <RangePicker onChange={onChange}/>
  </Space>
  <div className="py-6 flex flex-col gap-2 ">
    <Paper elevation={1}>
        <div style={{border:"12px "}} className="border-lg border-red-600  rounded-lg p-2">Total earnings : Rs. {total}</div>
    </Paper>
  <Paper elevation={1}>
    <div className="border-3 rounded-lg p-2">Total transactions : {trans}</div>
  </Paper>



  </div>
  </div>
  )
}

export default Calendar
