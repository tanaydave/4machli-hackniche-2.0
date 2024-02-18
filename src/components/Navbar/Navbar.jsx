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
        <Link to='/'><a
          class="navbar-brand"
          // href="/"
          style={{
            marginLeft: "1.2vw",
            marginTop:"10px",
            fontFamily: "Sacramento",
            fontSize: "40px",
            color: "#563300",
          }}
        >
          <img style={{ width: "230px" ,marginTop:"10px"}} src={logo} alt="helo" />
        </a></Link>
        
       
       
        <div className="font-constantia relative after:content-[''] pb-2 after:block after:h-[4px] after:w-[100%] after:bg-amber-950 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 text-2xl  transition-all delay-100 ease-in cursor-pointer pt-4">
              <Link  to="/dashboard">
                Analytics
              </Link>
            </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}

export default Navbar;