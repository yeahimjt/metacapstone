import React from 'react'
import Food2  from './assets/food2.png'
import Food1  from './assets/food1.png'
import './styles.css'
const Main = () => {
  return (
    <main className="flex pt-40 pb-60">
      <div className="flex-column justify-between p-4 w-[80%] mx-auto">
        <div className="flex-[0.5]">
          <div className="flex-column">
            <h1 className="text-4xl">Specials</h1>
            <h2>Some meals we find so delicious you must try!</h2>
          </div>
          <div className="flex justify-end pb-4">
            <button className="bg-yellow-400 px-4 py-2 hover:bg-yellow-600 hover:text-white rounded">Order Online</button>
          </div>
        </div>
        <div className="flex-1 w-fill mx-auto">
            <div className="grid md:grid-col-3 md:grid-flow-col sm:grid-flow-row gap-8 justify-evenly">
              <div className="w-fill bg-gray-200 rounded hover:scale-105 drop-shadow-lg transiion-all">
                <div className="">
                  <img className="w-full" src={Food2}/>
                </div>
                <div className="p-8">
                  <h1 className="text-3xl">Ceaser Salad</h1>
                  <h2 className="italic">Yummy ceaser salad!</h2>
                  <p className="text-green-400">$42.00</p>
                  <br></br>
                  <p>A great ceaser salad with the following ingredients: Lorem Lore mLore mLorem Lorem</p>
                  <br></br>
                  <p className="text-yellow-400 bg-[#495E57] w-[150px] text-center hover:cursor-pointer hover:bg-yellow-400 hover:text-[#495E57] rounded ">Order Now!</p>
                </div>
              </div>
              <div className="w-fill bg-gray-200 rounded hover:scale-105 drop-shadow-lg transiion-all">
                <div className="">
                  <img className="w-full" src={Food1}/>
                </div>
                <div className="p-8">
                  <h1 className="text-3xl">Ceaser Salad</h1>
                  <h2 className="italic">Yummy ceaser salad!</h2>
                  <p className="text-green-400">$42.00</p>
                  <br></br>
                  <p>A great ceaser salad with the following ingredients: Lorem Lore mLore mLorem Lorem</p>
                  <br></br>
                  <p className="text-yellow-400 bg-[#495E57] w-[150px] text-center hover:cursor-pointer hover:bg-yellow-400 hover:text-[#495E57] rounded ">Order Now!</p>
                </div>
              </div>
              <div className="w-fill bg-gray-200 rounded hover:scale-105 drop-shadow-lg transiion-all">
                <div className="">
                  <img className="w-full" src={Food2}/>
                </div>
                <div className="p-8">
                  <h1 className="text-3xl">Ceaser Salad</h1>
                  <h2 className="italic">Yummy ceaser salad!</h2>
                  <p className="text-green-400">$42.00</p>
                  <br></br>
                  <p>A great ceaser salad with the following ingredients: Lorem Lore mLore mLorem Lorem</p>
                  <br></br>
                  <p className="text-yellow-400 bg-[#495E57] w-[150px] text-center hover:cursor-pointer hover:bg-yellow-400 hover:text-[#495E57] rounded ">Order Now!</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Main