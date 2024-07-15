
const Filter = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 flex justify-between my-3 flex-wrap gap-4">
        <input placeholder="search" className="border rounded-md py-1 px-2" type="text" />
            <select name="selection" className="border rounded-md py-1 px-2" >
                <option >selection</option>
                <option value="choose-one">choose 1</option>
                <option value="choose-tow">choose 2</option>
            </select>

            <select name="selection" className="border rounded-md py-1 px-2" >
                <option >selection</option>
                <option value="choose-one">choose 1</option>
                <option value="choose-tow">choose 2</option>
            </select>
    </div>
  )
}

export default Filter
