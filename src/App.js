import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Homepage from './components/Homepage';
import Reservation from './components/Reservation';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
    </>
  );
}

export default App;
