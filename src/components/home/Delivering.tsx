import { TbArrowWaveRightDown } from "react-icons/tb";
const Delivering = () => {
  return (
    <div className='px-4 md:px-10 xl:px-20  bg-blue-800 flex sm:flex-row flex-col justify-between py-5 text-white items-center'>
      <div className="">
        <h1>"Delivering <br /> Health With Heart"</h1>
      </div>
      <div className="">
        <TbArrowWaveRightDown className="text-5xl text-orange-400" />
      </div>
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="flex flex-col justify-between gap-2">
          <h1 className="mx-auto text-xl font-bold">120K+</h1>
          <p className="">Recovered Patients</p>
        </div>

        <div className="flex flex-col justify-between gap-2">
          <h1 className="mx-auto text-xl font-bold">96%</h1>
          <p className="">Satisfaction Rate</p>
        </div>

        <div className="flex flex-col justify-between gap-2">
          <h1 className="mx-auto text-xl font-bold">54+</h1>
          <p className="">Expert Doctors</p>
        </div>
      </div>
      
    </div>
  )
}

export default Delivering
