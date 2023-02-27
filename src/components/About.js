import React from 'react'
import Building from './assets/building.jpg'
const About = () => {
  return (
    <section className="flex">
        <div className="flex-col  w-[65%] mx-auto justify-center">
            <div className="text-center">
                <h1 className="pt-8 text-4xl">About Us</h1>
            </div>
            <div className="flex flex-col lg:flex-row   pt-60 pb-80">
                <div className="flex-[0.5]">
                    <h1 className="text-3xl">Little Lemon</h1>
                    <h2 className="italics">Chicago</h2>
                    <p className="p-4">We are a loving restaurant based in San Antonio, Texas. Our owner is Sandy Lennon who is married to Harry Lennon. Both pour their heart and soul to the food and most importantly the customers that visit their restaurant. Our aspirations for the resaurant is to give every customer a enjoyable experience that creates memories that forever last.</p>
                </div>
                <div className="flex-[0.5] p-8">
                        <img src={Building}/>
                </div>
            </div>
        </div>
    </section>
);
}

export default About