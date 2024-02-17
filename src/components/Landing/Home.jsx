import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div class="main1">
        <Navbar></Navbar>
      <div class="head-container">
        <div class="fading-div">
          <div className="title-div">
            <h1>Awaken Your Senses with Ettarra</h1>
            <h2>A Journey to Rich and Bold Flavor</h2>
          </div>
          <div className="song-div">

            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/7gS59Rc2bmpgQCh5LOwagR?utm_source=generator&theme=0"
              width="180%"
              height="110%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="img-div"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;