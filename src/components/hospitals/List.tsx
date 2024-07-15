const iconsList = [
    {icon:"./icons/Ellipse 15.svg" , title:"Rouvan specialized hospital"},
    {icon:"./icons/Ellipse 16.svg" , title:"Tiba specialized hospital"},
    {icon:"./icons/Ellipse 17.svg" , title:"Salah Salem hospital"},
    {icon:"./icons/Ellipse 18.svg" , title:"Al Rehab Sohag hospital"},
    {icon:"./icons/Ellipse 19.svg" , title:"Dar El Teb hospital"},
    {icon:"./icons/Ellipse 20.svg" , title:"Green specialized hospital"},
    {icon:"./icons/Ellipse 21.svg" , title:"Tabarak New Cairo hospital"},
    {icon:"./icons/Ellipse 22.svg" , title:"Health Plus hospital"},
    {icon:"./icons/Ellipse 23.svg" , title:"Eye City hospital"},
    {icon:"./icons/Ellipse 25.svg" , title:"Neuro Spine hospital"},
    {icon:"./icons/Ellipse 26.svg" , title:"New Nozha hospital"},
    {icon:"./icons/Ellipse 27.svg" , title:"Aarfa Specialized hospital"},
    {icon:"./icons/Ellipse 28.svg" , title:"Zam specialized hospital"},
]
const List = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 mt-20 flex flex-wrap flex-row lg:justify-between justify-center gap-5">
        {iconsList.map(item =>(
            <div key={item.icon} className="flex gap-5 items-center cursor-pointer w-96">
                <img className="w-[60px] h-[60px]" src={item.icon} />
                <h1 className="text-2xl text-left">{item.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default List
