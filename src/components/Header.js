import React from 'react'
import {Link} from 'react-router-dom'
import Food from './assets/food1.png'
import './styles.css'

const Header = () => {
  return (
    <header className="flex bg-[#495E57] text-white">
      <div className="lg:flex lg:flex-row  justify-between p-4 lg:max-w-[70%] md:w-[100%]  gap:20 sm:w-[80%] mx-auto">
        <div className="flex-column flex-[0.5] p-6 items-center">
          <h1 className="text-3xl">Little Lemon</h1>
          <h1 className="italic">Chicago</h1>
          <p className="p-4">A resaurant who specializes in delivering food that is sure to make your taste buds want more. Serving mediterranean food with a twist of good ol' country. Visit one of our four locations by reserving a table now!</p>
          <Link to="/reservation"><button className="text-black bg-yellow-400 hover:bg-yellow-600 hover:text-white px-4 py-2 rounded">Reserve Now (CLICK THIS BUTTON)</button></Link>
        </div>
        <div className="flex justify-center items-center flex-[0.5]">
          <img  className="rounded-r-lg max-w-[400px]" src={Food}/>
        </div>
      </div>
    </header>
  )
}

export default Header