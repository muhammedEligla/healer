import { useState } from "react"
import Working from "./services/Working"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import Footer from "./Footer"

const listOfBoxes = [
    {icon:"icon1.png" , title:"Oncology" , desc1:"Cancer screening early" , desc2:"detection services." , button:"Explore now"},
    {icon:"icon2.png" , title:"Pediatrics" , desc1:"Treatment common of" , desc2:"childhood illness." , button:"Explore now"},
    {icon:"icon3.png" , title:"Neurology" , desc1:"Managing Diverse nervous" , desc2:"system conditions." , button:"Explore now"},
    {icon:"icon4.png" , title:"Dermatology" , desc1:"Diagonsis ,and treatment," , desc2:"skin condition such as acne." , button:"Explore now"},
    {icon:"icon5.png" , title:"Gynecology" , desc1:"Gynecological Exams," , desc2:"screenings and treatment." , button:"Explore now"},
    {icon:"icon6.png" , title:"Orthopedics" , desc1:"orthopedics surgeries ,such " , desc2:"as joint replacement." , button:"Explore now"},
    {icon:"icon7.png" , title:"Ent" , desc1:"Diagonsis ,and treatment," , desc2:"of ear ,noise and throat." , button:"Explore now"},
    {icon:"icon8.png" , title:"General surgery" , desc1:"Conducting Instrumental," , desc2:"action on other body parts." , button:"Explore now"},
    {icon:"icon9.png" , title:"Internal Medicine" , desc1:"preventive care,  annual " , desc2:"checkups, vaccinations." , button:"Explore now"},
]
const Services = () => {
    const [current , setCurrent] = useState<number>(0)
    
  const increment = () => {
    if(current < 2) {
        setCurrent(current + 1);
    }
  };

  const decrement = () => {
    console.log(current , 'dec') 
    if(current > 0){
        setCurrent(current - 1);
    }else{
        setCurrent(0)
    }
  };

    
  return (
    <div className="">
       <div className="py-10 px-4 bg-sky-100 text-center text-2xl w-full text-blue-600 font-semibold">
            <h1 className="">Explore our specialized medical <br />
                services
            </h1>
        </div>

        {/* boxes */}
        <div className="overflow-x-hidden w-[calc(100vw-32px)] mx-auto px-4">
            <div style={{transform:current < 2 ?`translateX(-${current * 48}vw)` : `translateX(-120vw)`}} 
            className="flex overflow-x-auto  gap-20 mt-5 w-max h-full transition-all ease-in-out duration-1000">
            {listOfBoxes.map(item =>(
                <div key={item.title} className="flex flex-col flex-grow justify-center items-center gap-3 p-3 min-w-64 max-w-96 border-2 rounded-lg">
                    <div className="w-[100px] h-[100px] rounded-full bg-sky-100 flex justify-center items-center">
                        <img className="w-[77px] h-[77px]" src={item.icon} />
                    </div>
                    <h1 className="">{item.title}</h1>
                    <p className="">{item.desc1} <br /> {item.desc2}</p>
                    <button className="py-3 px-5 rounded-full bg-blue-600 text-white">{item.button}</button>
                </div>
            ))}
            
            
        </div>
            <div className="flex justify-center gap-8 my-5">
                <div onClick={decrement} className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full bg-blue-500"><MdArrowBackIos /></div>
                <div onClick={increment} className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full bg-blue-500"><MdArrowForwardIos /></div>
            </div>
        </div>
        
        <Working />
        <div className="mt-5">
        <Footer />
        </div>
    </div>
  )
}

export default Services
