import SubFooter from "../SubFooter"


const FooterHome = () => {
  return (
    <div className="  pt-5 flex flex-col">
        <div className="px-4 md:px-10 xl:px-20 border-t-2  py-5 flex-col sm:flex-row flex  justify-between">
            <div className="">
                <ul className="flex flex-col">
                    <li className="text-2xl text-sky-600"><img className="w-6 h-6 inline-block mb-2" src="./aboutIcon/iconone.png" /> Healer</li>
                    <li className="">About us</li>
                    <li className="">Healer blog</li>
                    <li className="">Book Home Visit</li>
                    <li className="">Book Lab test at Home</li>
                    <li className="">order your monthly medication</li>
                    <li className="">FAQs</li>
                </ul>
            </div>
            <div className="">
                <ul className="flex flex-col">
                    <li className="text-2xl text-sky-600">Cities</li>
                    <li className="">istanbol</li>
                    <li className="">ankara</li>
                    <li className="">marsin</li>
                    <li className="">kayseri</li>
                    <li className="">maraash</li>
                    <li className="">borsa</li>
                </ul>
            </div>
            <div className="">
                <ul className="flex flex-col">
                    <li className="text-2xl text-sky-600">Specialties</li>
                    <li className="">opthalmology</li>
                    <li className="">Dermatology</li>
                    <li className="">Ear,Noise and Throat</li>
                    <li className="">Book Lab test at Home</li>
                    <li className="">more specialties</li>
                </ul>
            </div>
        </div>

    <SubFooter />
    </div>
  )
}

export default FooterHome
