import logo from './logo.svg';
import './App.css';
import Home from './components/Landing/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './components/Navbar/Admin/Admin';
import Tanay from './components/Navbar/Admin/Tanay';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={Navbar}></Route>
      <Route index element={<Home />} />
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/tanay' element={<Tanay/>}></Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
