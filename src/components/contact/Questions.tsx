
const Questions = () => {
  return (
    <div className="">
        {/* title */}
        <div className="py-10 bg-sky-100 text-center text-2xl text-blue-600 font-semibold">
            <h1 className="">Have Questions? contact Our <br />
                Mekical Team Today
            </h1>
        </div>
        {/* form box */}
        <div className="flex flex-col sm:flex-row px-4 md:px-10 xl:px-20  justify-between gap-2 mt-7">
            {/* img */}
            <div className="">
                <img className="rounded-3xl" src="contact.png" />
            </div>
            {/* forms */}
            <div className="w-full sm:w-1/2">
                <h1 className="text-2xl text-blue-600 font-semibold mb-3">Let's Discuss With You</h1>
                <form  action="">
                    <div className="w-full flex gap-2 flex-wrap flex-grow">
                        <input className="flex-grow border " placeholder="enter your name" type="email" />
                        <input className="flex-grow border " placeholder="phone" type="number" />
                    </div>
                    
                    <input className="w-full border my-3" placeholder="email address" type="text" />
                    <input className="h-40 w-full border " placeholder="message" type="text" />
                    <div className="mt-3 text-center">
                        <button className="rounded-full border-2  py-3 px-7 text-blue-600 font-semibold text-lg " type="submit">send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Questions
