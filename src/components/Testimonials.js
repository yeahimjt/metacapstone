import React from 'react'
import Person1 from './assets/person5.jpg'
import Person2 from './assets/person2.jpg'
import Person3 from './assets/person3.jpg'
const Testimonials = () => {
  return (
    <section>
        <div className="flex bg-[#495E57] text-white">
            <div className="flex-col w-[65%] mx-auto p-8">
                <div className="flex-col justify-center text-center pb-8">
                    <h1 className="text-4xl">Testimonials</h1>
                    <h2 className="italic">Don't just take our word for it, take it from our over 1,000 customers!</h2>
                </div>
                <div className="flex-1 pt-40">
                    <div className="grid  lg:grid-col-3 lg:grid-flow-col sm:grid-flow-row justify-between gap-10">
                        <div className="flex-col p-4  justify-center">
                            <div className="flex mx-auto justify-center hover:scale-105 drop-shadow-lg transiion-all">
                                <img className="w-full rounded-full" src={Person1}/>
                            </div>
                            <div className="text-center text-white pt-5">
                                <h1 className="italic text-gray-400">Sarah J.</h1>
                                <p className="text-2xl">"Amazing food, enjoyed every second!"</p>
                            </div>
                        </div>
                        <div className="flex-col p-4  justify-center">
                            <div className="flex  mx-auto justify-center hover:scale-105 drop-shadow-lg transiion-all">
                                <img className="w-full rounded-full" src={Person2}/>
                            </div>
                            <div className="text-center text-white pt-5">
                                <h1 className="italic text-gray-400">Sarah J.</h1>
                                <p className="text-2xl">"So delicious! Coming back for sure!"</p>
                            </div>
                        </div>
                        <div className="flex-col p-4  justify-center">
                            <div className="flex  mx-auto justify-center hover:scale-105 drop-shadow-lg transiion-all">
                                <img className="w-full rounded-full" src={Person3}/>
                            </div>
                            <div className="text-center text-white pt-5">
                                <h1 className="italic text-gray-400">Sarah J.</h1>
                                <p className="text-2xl">"Recommend to anyone who has a love for food!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials