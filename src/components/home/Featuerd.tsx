import { FaDollarSign, FaStar } from "react-icons/fa";
import { IoIosTimer, IoMdCall } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Featuerd = () => {
  return (
    <div className="py-4 px-4 md:px-10 xl:px-20 ">
        {/**title */}
      <div className="">
        <h1 className="font-semibold text-subTitle">Featured Doctors</h1>
      </div>
      {/* boxes pareint */}
      <div className="flex flex-col md:flex-row gap-4 w-full">

        
        
      <div className="p-2 rounded-md bg-slate-100  flex-grow">
        {/* box1 */}
        <div className="border-b-2 pb-2">
            {/* img */}
            <div className="">
                <img className="h-[99px]" src="doc1.svg" />
                <div className="text-amber-500 flex items-center gap-1"><FaStar  />5</div>
            </div>
            {/* subtitle */}
            <div className="">
                <h3 className="text-subTitle">Dr. muhammed eligla</h3>
            </div>
            {/* desc */}
            <div className="">
                <p className="">
                    fellowship of psychiatry{'(Mental,emoitn..'} <br />
                    Psychiatry and addiction treatment is a cognitive begabiora..
                </p>
            </div>
        </div>
        {/* box2 */}
        <div className="">
            {/* title */}
            <div className="">
                <h1 className="">Dr. muhammed eligla</h1>
            </div>
            {/* desc */}
            <div className="">
                <p className="">america losangelose 34 first floor</p>
            </div>
            {/* icons */}
            <div className="flex justify-around my-9">
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><IoIosTimer /></div>
                    <div className="">Waiting <br /> 30 minutes</div>
                </div>
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><FaDollarSign /> </div>
                    <div className="">Fees <br /> 340 TL</div>
                </div>
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><IoMdCall /></div>
                    <div className="">Call us <br /> 394850349</div>
                </div>
            </div>
            {/* button */}
            <div className="flex flex-col gap-2">
                <button className="py-2 px-5 bg-bluelight text-white  rounded-md">
                    book 07/4/2024(06-00 pm 09:00 pm)
                </button>
                <button className="bg-white py-2">show other avilable dates <MdOutlineKeyboardArrowDown className="inline" /></button>
            </div>
            {/* more */}
        </div>
      </div>
      <div className="py-2 rounded-md bg-slate-100 flex-grow">
        {/* box1 */}
        <div className="border-b-2 pb-2">
            {/* img */}
            <div className="">
                <img className="h-[99px]" src="doc2.png" />
                <div className="text-amber-500 flex items-center gap-1"><FaStar  />5</div>
            </div>
            {/* subtitle */}
            <div className="">
                <h3 className="text-subTitle">Dr. muhammed eligla</h3>
            </div>
            {/* desc */}
            <div className="">
                <p className="">
                    fellowship of psychiatry{'(Mental,emoitn..'} <br />
                    Psychiatry and addiction treatment is a cognitive begabiora..
                </p>
            </div>
        </div>
        {/* box2 */}
        <div className="">
            {/* title */}
            <div className="">
                <h1 className="">Dr. muhammed eligla</h1>
            </div>
            {/* desc */}
            <div className="">
                <p className="">america losangelose 34 first floor</p>
            </div>
            {/* icons */}
            <div className="flex justify-around my-9">
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><IoIosTimer /></div>
                    <div className="">Waiting <br /> 30 minutes</div>
                </div>
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><FaDollarSign /> </div>
                    <div className="">Fees <br /> 340 TL</div>
                </div>
                <div className="flex flex-col justify-center text-center cursor-pointer">
                    <div className="text-subTitle text-2xl mx-auto"><IoMdCall /></div>
                    <div className="">Call us <br /> 394850349</div>
                </div>
            </div>
            {/* button */}
            <div className="flex flex-col gap-2">
                <button className="py-2 px-5 bg-bluelight text-white  rounded-md">
                    book 07/4/2024(06-00 pm 09:00 pm)
                </button>
                <button className="bg-white py-2">show other avilable dates <MdOutlineKeyboardArrowDown className="inline" /></button>
            </div>
            {/* more */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Featuerd
