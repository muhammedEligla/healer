import { FaApple, FaGooglePlay } from "react-icons/fa"

const Download = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20  bg-bsky py-4  flex flex-col gap-3 mb-4">
        <h2 className="text-2xl font-semibold text-subTitle">
            Book on out site or download the App now!
        </h2>
        <h2 className="text-2xl">
            Healer Connecting you with best Doctors in all specialties.
        </h2>
        <div className="flex flex-row gap-3 ml-2">
            <div className="flex flex-row bg-white rounded-md items-center px-3 gap-3 shadow-sm">
            <FaGooglePlay className="text-2xl" />
                <div className="">
                    <p className="">Download</p>
                    <h3 className="">App Store</h3>
                </div>
            </div>
            <div className="flex flex-row bg-white rounded-md shadow-sm  items-center px-3 gap-3 ">
            <FaApple className="text-2xl" />
                <div className="">
                    <p className="">Download</p>
                    <h3 className="">Google Play</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download
