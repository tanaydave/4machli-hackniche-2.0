import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Landing/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Navbar/Admin/Promotion";

import Daily from "./components/Navbar/Admin/Daily";
import Weekly from "./components/Navbar/Admin/Weekly";

import Dashboard from "./components/Navbar/Admin/Dashboard";
import Pie from "./components/Navbar/Admin/PieChart";

import Best from "./components/Navbar/Admin/Best";
import Reviews from "./components/Navbar/Admin/Reviews";
import Hourlydata from "./components/Navbar/Admin/Hourlydata";
import Coupons from "./components/Navbar/Admin/Coupons";
import Calendar from "./components/Navbar/Admin/Calendar";
import Promotion from "./components/Navbar/Admin/Promotion";

function App() {
  return (
    <div className=" font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>

          {/* <Route index element={<Home />} /> */}
          <Route path="/admin" element={<Admin />}></Route>

          <Route path="/daily" element={<Daily />}></Route>
          <Route path="/weekly" element={<Weekly />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/pie" element={<Pie />}></Route>
          <Route path="/coupons" element={<Coupons />}></Route>
          <Route path="/best" element={<Best />}></Route>
          <Route path="/review" element={<Reviews />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>


          <Route path="/hourlydata" element={<Hourlydata />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
