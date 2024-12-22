import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Tours from '../pages/Tours'; 

import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import Gallery from '../pages/Gallery';



const Routers = () => {
  return (
    <div>
      <Routes>
        {/* Redirect from root to home page */}
        <Route path='/' element={<Navigate to='/home' />} />
        
        {/* General Pages */}
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/tour-packages/:id" element={<TourDetails />} /> {/* Route for tour packages */}
        {/* Flight, Train, Bus, and Hotel Booking Pages */}
        
        {/* Tour Details Page */}
        <Route path='/tours/:id' element={<TourDetails />} />

        
       
      </Routes>
    </div>
  );
};

export default Routers;
