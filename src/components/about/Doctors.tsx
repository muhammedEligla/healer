import { FaDollarSign, FaStar } from 'react-icons/fa'
import { dataDoctors } from '../dataDoctors'
import { IoIosTimer, IoMdCall } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
const Doctors = () => {
  const data = dataDoctors
  return (
      <div className="py-4 px-4 md:px-10 xl:px-20 grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {data.map((item , i) =>(
          <div key={i} className="p-2 rounded-md bg-slate-100  flex-grow">
            {/* box1 */}
            <div className="border-b-2 pb-2">
                {/* img */}
                <div className="">
                    <img className="h-[99px]" src={item.image} />
                    <div className="text-amber-500 flex items-center gap-1"><FaStar  />5</div>
                </div>
                {/* subtitle */}
                <div className="">
                    <h3 className="text-blue-600">Dr. {item.name}</h3>
                </div>
                {/* desc */}
                <div className="">
                    <p className="">
                        {item.desc} <br />
                        {item.desc2}
                    </p>
                </div>
            </div>
            {/* box2 */}
            <div className="">
                {/* title */}
                <div className="">
                    <h1 className="">Dr. {item.name}</h1>
                </div>
                {/* desc */}
                <div className="">
                    <p className="">{item.address}</p>
                </div>
                {/* icons */}
                <div className="flex justify-around my-9">
                    <div className="flex flex-col justify-center text-center cursor-pointer">
                        <div className="text-sky-600 text-2xl mx-auto"><IoIosTimer /></div>
                        <div className="">Waiting <br /> 30 minutes</div>
                    </div>
                    <div className="flex flex-col justify-center text-center cursor-pointer">
                        <div className="text-sky-600 text-2xl mx-auto"><FaDollarSign /> </div>
                        <div className="">Fees <br /> 340 TL</div>
                    </div>
                    <div className="flex flex-col justify-center text-center cursor-pointer">
                        <div className="text-sky-600 text-2xl mx-auto"><IoMdCall /></div>
                        <div className="">Call us <br /> {item.phone}</div>
                    </div>
                </div>
                {/* button */}
                <div className="flex flex-col gap-2">
                    <button className="py-2 px-5 bg-blue-600 text-white  rounded-md">
                        book 07/4/2024(06-00 pm 09:00 pm)
                    </button>
                    <button className="bg-white py-2">show other avilable dates <MdOutlineKeyboardArrowDown className="inline" /></button>
                </div>
                {/* more */}
            </div>
          </div>
        ))}
        </div>
  )
}

export default Doctors
