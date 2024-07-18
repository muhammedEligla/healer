import { BiPhone } from "react-icons/bi"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"

const SubFooter = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 flex flex-col sm:flex-row gap-2 justify-between items-center py-2 border-t-2">
        <h3 className="">&copy; designed and developed by <Link className="text-red-500 text-xs sm:text-sm" to={'https://protofolio-9bd8c.web.app/'}>MUHAMMED ELIGLA</Link> </h3>
        <div className="flex justify-between gap-3 items-center w-full sm:w-1/3">
          <div className="text-sky-500">Healer</div>
          <div className="text-sky-500 gap-2 flex ">
              <FaFacebook />
              <BsInstagram />
              <BsWhatsapp />
              <BiPhone />
          </div>
        </div>
        
    </div>
  )
}

export default SubFooter
