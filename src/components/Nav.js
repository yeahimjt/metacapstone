import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import Logo from './assets/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  const ref=useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const handleClick = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <nav className="flex w-[100%] p-4 ">
        <div className="flex justify-between items-center mx-auto p-4 text-black w-[100%] max-w-[1200px]">
          <div className="md:w-60 sm-20">
              <img src={Logo} className=""/>
          </div>
          <div className="lg:flex gap-10 md:hidden hidden">

              <Link to="/" className="hover:text-red-900 hover:scale-125 transition-all inline-block">Home</Link>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">About</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Menu</a>
              <Link to="/reservation" className="hover:text-red-900 hover:scale-125 transition-all inline-block">Reservations</Link>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Order Line</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Login</a>

          </div>
          <div className="relative lg:hidden md:visible">
            <AiOutlineMenu className="relative left-4 -top-10 hover:scale-125 transition-all hover:cursor-pointer" size={20} onClick={handleClick}/>
            {open &&

                <div className="absolute -top-5 -right-4 bg-green-900 text-white h-[200px] min-w-[200px] flex flex-col p-4 text-left" ref={ref}>
                  <Link to="/" className="hover:text-red-900 hover:scale-125 transition-all inline-block">Home</Link>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">About</a>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">Menu</a>
                  <Link to="/reservation" className="hover:text-red-900 hover:scale-125 transition-all inline-block">Reservations</Link>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">Order Line</a>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">Login</a>
              </div>

          }
          </div>
        </div>
    </nav>
  )
}

export default Nav