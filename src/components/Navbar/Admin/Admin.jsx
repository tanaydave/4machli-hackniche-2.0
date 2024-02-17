import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid,Paper } from "@mui/material";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

import Slider from "react-slick";
import { delay, motion as m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";



const Admin = () => {
  const [promo,setPromo]=useState([])

 
    
    useEffect(() => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/promotions',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data));
        setPromo(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
      
      },[]);

      const renderSlides = () =>{
        console.log("helo");
      promo.map((promo) => {
        console.log("heloo");
        return(
          <>
          hii
       <div style={{backgroundColor:"blue"}}>
       </div>
       </>
      // console.log(promo)
)}
)};
  return (
    <>
    {promo?<>
      <Grid conatiner spacing={2}>
        

      <Grid item md={6}>
          
          <Grid container>
              <Paper elevation={2}>
              <Grid item md={6} xs={12}>
              <div style={{backgroundColor:"red"}}>
                hello
                
        <Slider
          // dots={true}
          autoplay={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={4000}
          infinite={true}
          arrows={false}
        >
          {renderSlides()}
          
        </Slider>
      </div>
              </Grid>
              </Paper>
              <Paper elevation={2}>
              <Grid item md={6} sm={12}>   
              </Grid>
              </Paper>
          </Grid>
      </Grid>

      </Grid>

    
    
    </>:<></>}
   
    </>
  );
};
export default Admin;