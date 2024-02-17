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
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed:4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 
    
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
      promotions.map((promo) => {
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

const promotions= ['Promotion: 25% off on OAT MILK (150 ML) during weekends', 'Promotion: 20% off on Madagascar Hot Chocolate (350 ML) during weekends', 'Promotion: 15% off on Sea Salt Dark Mocha Frappe (450 ML) during weekends', 'Promotion: 20% off on ESPRESSO (30 ML) during weekends', 'Promotion: 25% off on Berliners (Lotus Biscoff Berliner) during weekends', 'Promotion: 10% off on Irish Americano (350 ML) during weekends', 'Promotion: 25% off on Iced Latte (350 Ml) during weekends', 'Promotion: 15% off on South Indian Filter Kaapi (250 Ml) during weekends', 'Promotion: 25% off on Cappucino (350 ML) during weekends', 'Promotion: 20% off on Tartlets (kodai cheese tartlet) during weekends', 'Promotion: 15% off on Pour Over during weekends', 'Promotion: 25% off on Iced Latte (450 ML) during weekends', 'Promotion: 15% off on Berliner Mix 3 Pcs (Nutella Berliner) during weekends', 'Promotion: 25% off on Hazelnut Frappe (450 ML) during weekends', 'Promotion: 10% off on Berliners (Blueberry Cheese Cake Berliner) during weekends']
  return (
    <>
    {promo?<>
      <Grid conatiner spacing={2}>
        

      <Grid item md={6}>
          
          <Grid container>
              <Paper elevation={2}>
              <Grid item md={6} xs={12}>
              <div >
                
                
        {/* <Slider
          // dots={true}
          autoplay={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={4000}
          infinite={true}
          arrows={false}
        >
          {renderSlides()}
          
        </Slider> */}

<Slider
dots={true}
autoplay={true}
slidesToShow={1}
slidesToScroll={1}
autoplaySpeed={4000}
infinite={true}
arrows={false}>
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