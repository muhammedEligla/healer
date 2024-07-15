import { AiFillLike } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import { TiNews } from "react-icons/ti"

const HealerIs = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20  bg-blue-950  py-4 text-white">
      <h1 className="text-3xl">What is Healer?</h1>
      <div className="flex gap-2 flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 ">
            <FaCheckCircle className="text-amber-500 text-xl mt-2" />
                <h2 className="text-2xl">
                    Healer is a platform for fast and easy <br />
                    way to book a doctor.
                </h2>
            </div>
            <div className="flex flex-row gap-3 ">
                    <AiFillLike className="text-amber-500 text-xl mt-2" />
                <h2 className="text-2xl">
                    Healer Connecting you with best <br />
                    Doctors in all specialties.
                </h2>
            </div>
            <div className="flex flex-row gap-3 ">
            <TiNews  className="text-amber-500 text-xl mt-2" />
                <h2 className="text-2xl">
                    Book a doctor at any time anywhere.
                </h2>
            </div>
        </div>
        <div className="w-1/3">
            <img className="w-full" src="whatis.png" />
        </div>
      </div>
    </div>
  )
}

export default HealerIs
