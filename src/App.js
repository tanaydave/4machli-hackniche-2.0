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



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={Navbar}></Route>
      <Route index element={<Home />} />
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/tanay' element={<Tanay/>}></Route>
      <Route path='/trial' element={<Trial/>}></Route>
      <Route path='/trial2' element={<Trial2/>}></Route>
      <Route path='/trial3' element={<Trial3/>}></Route>
      <Route path='/trial4' element={<Trial4/>}></Route>




    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
