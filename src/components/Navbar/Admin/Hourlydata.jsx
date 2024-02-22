import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Hourlydata = () => {
    const [hourly, setHourly] = useState([]);

  const data = {
    labels: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21, 22, 23,
    ],
    datasets: [
      {
        fill: true,
        label: "Hourly Sales",
        data: hourly,
        borderColor: "rgba(0,0,0)",
        backgroundColor: "rgba(242,234,226)",
      },
    ],
  };

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/hourly",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setHourly(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);
  return (
    <>
      <Line data={data} />
    </>
  )
}

export default Hourlydata




  

  
