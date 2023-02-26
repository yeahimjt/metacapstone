import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header className="flex bg-[#495E57]">
      <div className="flex justify-between p-4 max-w-[50%] mx-auto">
        <div className="flex-column flex-[0.5] p-6">
          <h1>Little Lemon</h1>
          <h1>Chicago</h1>
          <p>Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200 Lorem200</p>
          <button className="bg-yellow-400 hover:bg-yellow-600 hover:text-white px-4 py-2 rounded">Reserve Now</button>
        </div>
        <div className="flex justify-center items-center flex-[0.5]">
          <div className="p-32 bg-black text-white">Hi</div>
        </div>
      </div>
    </header>
  )
}

export default Header