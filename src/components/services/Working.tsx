import './services.css'

const listOfBoxes = [
    {img:"img1.png" , title:"Select expert doctor" , desc:"choosing an expert doctor is" , desc2:"crucial for ensuring quality care" , bg:"#1F85D6"},
    {img:"img2.png" , title:"Made appointment" , desc:"we are here to assist you" , desc2:"acheduing you appontment" , bg:"#1B3C74"},
    {img:"img3.png" , title:"Online Consultation" , desc:"highly specialzed healgcare " , desc2:"consuitants for you needs" , bg:"#FFC225"},
];

const Working = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 " >
      <h1 className="text-2xl text-subTitle font-semibold text-center my-8 work">
        ur working process
      </h1>
      <div className="flex gap-10 sm:justify-between justify-center flex-wrap">
        {listOfBoxes.map(item =>( 
            <div key={item.title} className="flex flex-col justify-center relative">
              <div style={{background:item.bg}}
              className={` w-9 h-9 rounded-full  absolute 
                -top-2 -left-2 flex justify-center items-center text-xl font-semibold text-white`}>01</div>
                <img className="rounded-lg" src={item.img} />
                <h1 className="font-semibold text-xl my-2 text-blue-900">{item.title}</h1>
                <p className="">{item.desc} <br /> {item.desc2}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Working
