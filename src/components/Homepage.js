import React, {useState,useEffect} from 'react'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Testimonials from './Testimonials'
import About from './About'
import {useLocation} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Homepage() {
    const location = useLocation();
    const [reserve, setReserve] = useState(null);
    const [notClosed, setNotClosed] = useState(false);

    console.log(location)
    useEffect(()=> {
        if (location.state) {
            setReserve(true)
            setNotClosed(true)
        }
    },[location])
    console.log("Reserve:",reserve)
  return (
    <>
        <Nav></Nav>
        {reserve && notClosed &&
        <div className="relative flex-col mx-auto mb-8 bg-green-400 w-[25%]">
            <h1 className="text-2xl text-center">Success!</h1>
            <p className="italics text-center">Your table has been reserved, {location.state.name}.</p>
            <div className="absolute top-[10px] right-[8px]">
                <AiOutlineClose className="hover:scale-125 hover:cursor-pointer" size={24} onClick={()=>setNotClosed(!notClosed)}/>
            </div>
        </div>
        }
        <Header></Header>
        <Main></Main>
        <Testimonials/>
        <About/>
        <Footer></Footer>
    </>
  );
}

export default Homepage;