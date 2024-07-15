
const HeadOfAbuot = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 xl:px-20 my-10 gap-2">
        <div className="md:w-1/2 w-full  flex flex-col justify-center">
            <h1 className="text-3xl mx-auto md:mx-0 text-sky-800">Book an appointment with <br />
                <span className="font-semibold">Health plus Hospital</span>
            </h1>
            <h1 className="text-3xl text-sky-800 "></h1>
            <div className="mt-10 flex gap-3 justify-center flex-wrap">
                <button className="py-1 px-4 border bg-blue-600 text-xl text-white rounded-lg">Book appoinment</button>
                <button className="py-1 px-4 border text-blue-600 text-xl  rounded-lg">Cancel appointmet</button>
            </div>
        </div>
        <div className="flex flex-col border rounded-lg gap-8 p-5 md:items-start items-center md:w-1/2">
            <img className="w-32 h-32" src="Ellipse 23.svg" />
            <div className="">
                <h1 className="text-2xl text-sky-600 font-bold">Health plus hospital</h1>
            </div>
                <p className="font-semibold inline-block">El fayoum city 
                    <span className="text-zinc-600"> Al -Gomhouria steet, <br /> 
                    downtown , in front of the central bridge.</span>
                </p>
            
            <div className="flex justify-between w-full">
                <div className="flex flex-col text-center justify-center ">
                    <img className="w-12 h-12 mx-auto" src="./aboutIcon/iconone.png" />
                    <h1 className="font-semibold">Specialities</h1>
                    <h1 className="text-sky-400">19 Specialities</h1>
                </div>
                <div className="flex flex-col text-center justify-center ">
                    <img className="w-12 h-12 mx-auto" src="./aboutIcon/iconthree.svg" />
                    <h1 className="font-semibold">Doctors number</h1>
                    <h1 className="text-sky-400">19 doctor</h1>
                </div>
                <div className="flex flex-col text-center justify-center ">
                    <img className="w-12 h-12 mx-auto" src="./aboutIcon/icontow.svg" />
                    <h1 className="font-semibold">Call us</h1>
                    <h1 className="text-sky-400">948 9305 9305</h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeadOfAbuot
