import logo from './logo.svg';
import './App.css';
import Home from './components/Landing/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './components/Navbar/Admin/Admin';
import Tanay from './components/Navbar/Admin/Tanay';
import Trial from './components/Navbar/Admin/Trial';
import Trial2 from './components/Navbar/Admin/Trial2';
import Trial3 from './components/Navbar/Admin/Trial3';
import Trial4 from './components/Navbar/Admin/Trial4';
import { Trial5 } from './components/Navbar/Admin/Trial5';
import Mover1 from './components/Navbar/Admin/Mover1';
import Best from './components/Navbar/Admin/Best';
import Reviews from './components/Navbar/Admin/Reviews';




function App() {
  return (
    <div className=' font-poppins'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route index element={<Home />} /> */}
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/tanay' element={<Tanay/>}></Route>
      <Route path='/trial' element={<Trial/>}></Route>
      <Route path='/trial2' element={<Trial2/>}></Route>
      <Route path='/trial3' element={<Trial3/>}></Route>
      <Route path='/dashboard' element={<Trial4/>}></Route>
      <Route path='/trial5' element={<Trial5/>}></Route>
      <Route path='/mover' element={<Mover1/>}></Route>
      <Route path='/best' element={<Best/>}></Route>
      <Route path='/review' element={<Reviews/>}></Route>





    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
