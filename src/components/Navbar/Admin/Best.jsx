import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {Button, ButtonGroup} from '@mui/material'

const Best = () => {
  const [items, setItems] = useState([]);
    const [sim,setSim]=useState()
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/airecommend",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        // console.log((response.data.names));
        //   names_of_prod= response.data.names
        setItems(response.data.names);
        //   console.log(items)
        // const quantity_of_prods=response.data.prods
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);
  const mba=(a)=>{

    console.log((a));
    mbaanalysis(a);
  }

  const mbaanalysis=()=>{
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:5000/patterns",
        headers: {},
      };
  
      async function makeRequest() {
        try {
          const response = await axios.request(config);
          console.log((response.data));
          //   names_of_prod= response.data.names
        //   setItems(response.data.names);
          //   console.log(items)
          // const quantity_of_prods=response.data.prods
        } catch (error) {
          console.log(error);
        }
      }
  
      makeRequest();
  }
  return (
    <div className="flex flex-col items-center gap-2 ">
      Most Sold Items
      <ButtonGroup  aria-label="outlined button group " orientation="vertical">
        
      {items.map((name) => {
        // console.log("hello")
        return <Button className=" border-b-4" sx={{padding:2,color:'white'}} onMouseEnter={()=>mba(name)}  onClick={() => mba(name)}>{name}</Button>;
      })}
      </ButtonGroup>

    </div>
  );
};

export default Best;
