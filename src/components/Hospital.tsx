import Filter from "./hospitals/Filter"
import List from "./hospitals/List"
import SubFooter from "./SubFooter"

const Hospital = () => {
  return (
    <div className=" flex flex-col">
      <div className="px-4 md:px-10 xl:px-20 flex items-center justify-between">
        <h1 className="text-2xl text-blue-900 font-semibold  pr-2 w-2/3">
            choose the hospital and book <br />
            the best doctor <img className="w-10 inline-block" src="logo.png" />
        </h1>
        <img className="rounded-lg w-1/3" src="hospital.png" />
      </div>
      
        <Filter />
        <List />
        <SubFooter />

    </div>
  )
}

export default Hospital
