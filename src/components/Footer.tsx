import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
        <div className="py-4 px-4 md:px-10 xl:px-20 flex flex-col sm:flex-row  justify-between gap-7 border-t-2">
            <ul className="flex flex-col gap-4 w-1/2 lg:w-1/3">
                <li className="text-2xl text-sky-600"><img className="w-6 h-6 inline-block mb-2" src="./aboutIcon/iconone.png" /> Healer</li>
                <li className="text-xl">
                    From wellness tips to expert advice,
                    We're here to support your journey to a healthier you.
                </li>
                
                <li className="flex justify-start gap-5 text-sky-600 text-xl">
                <FaFacebook />
                <BsInstagram />
                <BsWhatsapp />
                </li>
            </ul>

            <ul className=" flex-col gap-4 w-1/3 hidden lg:flex">
                <li className="text-2xl text-sky-600">Quick links</li>
                <li className="text-xl">Home</li>
                <li className="text-xl">FAQ'S</li>
                <li className="text-xl">About</li>
                <li className="text-xl">Privact plicy</li>
                <li className="text-xl">Support</li>
            </ul>

            <ul className="flex flex-col gap-4 w-1/2 lg:w-1/3">
                <li className="text-2xl text-sky-600">Opening Hours</li>
                <li className="">Monday - Friday: <span className="text-zinc-500"> - 09:00 AM - 08:00 PM</span></li>
                <li className="">Saturday - Sunday : <span className="text-zinc-500"> - 12:00 PM - 02:00 PM</span></li>
                <li className="">Monday - Friday: <span className="text-zinc-500"> - 09:00 AM - 08:00 PM</span></li>
                <li className="">Saturday - Sunday : <span className="text-zinc-500"> - 12:00 PM - 02:00 PM</span></li>
                <li className="">Monday - Friday: <span className="text-zinc-500"> - 09:00 AM - 08:00 PM</span></li>
                <li className="">thursday - Sunday : <span className="text-zinc-500"> - 12:00 PM - 02:00 PM</span></li>
            </ul>
    </div>
  )
}

export default Footer
