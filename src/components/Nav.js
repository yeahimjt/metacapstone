import React, {useState, useRef, useEffect} from 'react'
import './styles.css'
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
          <div className="">
              <div className="w-4 h-5">Hi</div>
          </div>
          <div className="flex gap-10 ">
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Home</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">About</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Menu</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Reservations</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Order Line</a>
              <a className="hover:text-red-900 hover:scale-125 transition-all inline-block" href="" alt="">Login</a>
          </div>
          <div className="relative">
            <AiOutlineMenu className="hover:scale-125 transition-all hover:cursor-pointer" size={20} onClick={handleClick}/>
            {open &&

                <div className="absolute top-5 right-0 bg-red-500 h-[200px] min-w-[200px] flex flex-col p-4 text-left" ref={ref}>
                  <a className="hover:text-red-900 hover:scale-110 transition-all " href="" alt="">Home</a>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">About</a>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">Menu</a>
                  <a className="hover:text-red-900 hover:scale-110 transition-all" href="" alt="">Reservations</a>
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