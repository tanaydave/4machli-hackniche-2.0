import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import Radio from "@mui/material/Radio";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default function Daily() {
  const [daily, setDaily] = useState();
  const [value, setValue] = React.useState("female");
  const [dailyfinal, setDailyfinal] = useState([0]);
  const [dailytrans, setDailytrans] = useState([0]);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/daily",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(response.data);
        let ctr = 0;
        for (let i = 0; i < response.data.length; i += 1) {
          // let v=response.data[i].final_total+response.data[i+1].final_total+response.data[i+2].final_total
          // console.log(v);
          // dailyfinal.push(v)
          // v=response.data[i].transactions+response.data[i+1].transactions+response.data[i+2].transactions
          // dailytrans.push(v)
          dailyfinal[ctr] = response.data[i].final_total;
          dailytrans[ctr] = response.data[i].transactions;
          ctr++;
        }
        setDaily(response.data);
        console.log(dailyfinal);
        console.log(dailytrans);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);
  const data = {
    labels: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],

    datasets: [
      {
        label: selectedValue === "a" ? "Daily Income" : "Daily Transaction",
        data: selectedValue === "a" ? dailyfinal : dailytrans,
        fill: false,
        borderColor: "rgb(171,135,125)",
        backgroundColor: "rgb(171,135,125)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <div className="h-full">
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
      {daily ? (
        <>
          {dailyfinal ? (
            <>
              {dailytrans ? (
                <>
                  <Line
                    width={270}
                    height={200}
                    data={data}
                    style={{
                      marginLeft: "30px",
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
