import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import logo from "../assets/logo-removebg-preview.png";
import logo from '../assets/logo-removebg-preview.png'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  
  return (
    <>
      <nav nav className="navbar flex justify-between px-16 items-center fixed-top navbar-expand-lg " id="nav_design">
        <a
          class="navbar-brand"
          href="#"
          style={{
            marginLeft: "1.2vw",
            marginTop:"10px",
            fontFamily: "Sacramento",
            fontSize: "40px",
            color: "#563300",
          }}
        >
          <img style={{ width: "230px" ,marginTop:"10px"}} src={logo} alt="helo" />
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-0 g-0">
            <li class="nav-item active">
              <Link to="/" class="nav-link" href="#">
                HOME
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/menu" class="nav-link" href="#">
                MENU
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/events" class="nav-link">
                EVENTS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/games" class="nav-link">
                GAMES
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/leader" class="nav-link" href="#">
                LEADERBOARD
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ProfileDetails" class="nav-link" href="#">
                <AccountCircleIcon
                  sx={{ color: "#563300", fontSize: "30px", marginTop: "0px" }}
                />
              </Link>
            </li>
          </ul>
        </div> */}
       
        {/* <div className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-brown-200 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in">Analytics</div> */}
        <div className="font-constantia relative after:content-[''] pb-2 after:block after:h-[4px] after:w-[100%] after:bg-amber-950 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 text-2xl  transition-all delay-100 ease-in cursor-pointer pt-4">
              <Link  to="/trial4">
                Analytics
              </Link>
            </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}

export default Navbar;