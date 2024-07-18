
const Hero = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20  flex justify-between h-[90vh] items-center flex-wrap">
        <div className="flex flex-col gap-10">
            <h1 className=" text-darkblue font-bold text-3xl">
                your trusted path <img className="w-8 inline" src="logo.png" /> <br />
                to recovery
            </h1>
            <p className="">
                we believe that heathcere shoulue be more thewan just a servece . <br />
                it should be a commassionate and collabretie jumey towards weiness.
            </p>
            <div className="flex justify-between">
                <button className="rounded-md py-3 px-4 bg-bluelight text-white">get appointment</button>
                <button className="rounded-md py-3 px-6 border">watch video</button>
            </div>
        </div>
        <div className="w-5/12 flex items-center mx-auto">
            <img src="hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
