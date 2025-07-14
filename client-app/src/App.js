import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'; //      
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Registration/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandigPage from './components/Home/LandingPage';
import BookingHistory from './components/pages/BookignHistroy/BookingHistory';
import Bookbike from './components/pages/BookBike/Bookbike';


function App() {
  return (
    <>
    
     
    <Router  >   
      
      <Navbar/>
      
<ToastContainer
        position='top-right' autoClose={2000}/>
     
      <Routes>
         

        

        <Route path="/l" element={<LandigPage/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />

             

        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/bookinghistory" element={<PrivateRoute><h1><BookingHistory/></h1></PrivateRoute>} />
        
        <Route path="/book-bike" element={<PrivateRoute><Bookbike></Bookbike></PrivateRoute>} />

      </Routes>
    </Router>
    
  
    </>
  );
}


export default App;


