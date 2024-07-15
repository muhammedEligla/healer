import { useState } from "react";
import { IoIosList } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const listOfNav = [
  {title :'home' , link:'/',},
  {title :'services' , link:'/services',},
  {title :'about' , link:'/about',},
  {title :'hospitals' , link:'/hospital',},
  {title :'contact' , link:'/contact',},
]
const Navbar = () => {

  const handleClick = ()=>{
    setIsOpen(!listIsOpen)
  }

  const [listIsOpen , setIsOpen ] = useState(false)
  const pathname = useLocation().pathname
  return (
    <div className="px-4 md:px-10 xl:px-20  flex justify-between flex-row items-center w-full  py-2 bg-sky-100  relative">
        <div className="">
          <img className="w-10" src="logo.png" alt="" />
        </div>
        <div className="">
          <div className="md:hidden flex">
            <IoIosList onClick={handleClick} className="text-3xl cursor-pointer" />
          </div>


            <ul className="hidden justify-between flex-row gap-3 md:flex">
              {listOfNav.map(item =>(
                <li key={item.title} style={{color:item.link === pathname ? 'blue' : ''}} ><Link className="hover:bg-sky-200 py-1 px-2 rounded-md" to={item.link}> {item.title} </Link></li>
              ))}
            </ul>
        </div>
        <div className="hidden md:flex">
          <IoPersonCircleOutline className="text-2xl text-sky-500" />
        </div>


        {/* meduem screen list */}
        <div className={`absolute right-7 top-14 bg-sky-100 py-3 px-9 text-center z-10 rounded-md md:hidden ${listIsOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col gap-2">
          {listOfNav.map(item =>(
                <li key={item.title} style={{color:item.link === pathname ? 'blue' : ''}} ><Link className="hover:bg-sky-200 py-1 px-2 rounded-md" to={item.link}> {item.title} </Link></li>
              ))}
              <li className="bg-neutral-100 py-1 px-2 rounded-md cursor-pointer hover:bg-sky-200">
                <span className="text-xl text-sky-500 mx-auto" >Login</span>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
