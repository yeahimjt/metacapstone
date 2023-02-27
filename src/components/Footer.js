import React from 'react'
import './styles.css'
import Banner from './assets/logo.png'

const Footer = () => {
  return (
    <footer className="flex bg-[#495E57] text-white">
      <div className="flex w-[85%] mx-auto justify-evenly p-12">
        <div className="bg-gray-200 opacity-80">
          <img src={Banner}/>
        </div>
        <div className="flex-col">
          <h1>Navigation</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="">
          <h1>Contact</h1>
          <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>Address</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer