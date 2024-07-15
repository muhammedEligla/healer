import './contactStykle.css'
const VisitUs = () => {
  return (
    <div className='px-4 md:px-10 xl:px-20  my-7'>
      <h1 className='my-5 text-center text-2xl text-blue-500 font-semibold visit '>ome & Visit Us</h1>
      <div className=" flex flex-col md:flex-row justify-between gap-8  md:gap-3">
        <div className="flex flex-col gap-3">
            <img className="rounded-lg" src="visit.png" />
            <h1 className="text-2xl text-blue-800 font-semibold">los angelos ,CA 90038</h1>
            <div className="flex flex-row md:flex-col justify-between md:gap-3">
              <p className='text-slate-600 font-semibold'>456 ELM Avenue</p>
              <p className='text-slate-600 font-semibold'>Suite 300</p>
              <p className='text-slate-600 font-semibold'>Contact : 049593059</p>
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <img className="rounded-lg" src="visit.png" />
            <h1 className="text-2xl text-blue-800 font-semibold">los angelos ,CA 90038</h1>
            <div className="flex flex-row md:flex-col justify-between md:gap-3">
              <p className='text-slate-600 font-semibold'>456 ELM Avenue</p>
              <p className='text-slate-600 font-semibold'>Suite 300</p>
              <p className='text-slate-600 font-semibold'>Contact : 049593059</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VisitUs
