
const WorkCards = () => {
    return (
        <div className="w-full bg-zinc-100 h-screen flex flex-col md:flex-row gap-5 py-32 px-10">

            <div className="cardContainer md:h-[50vh]  w-full md:w-1/2 px-10 cursor-pointer">
                <div className="card relative w-full h-[300px] md:h-full bg-[#004d43] rounded-md flex justify-center items-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-1  border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold">&copy;2022-2024</button>
                </div>
            </div>

            <div className="cardContainer  md:h-[50vh] w-full md:w-1/2 flex gap-5">

                <div className="card relative w-full h-[300px] md:h-full bg-[#212121] rounded-md flex justify-center items-center cursor-pointer">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-8 py-1  border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold uppercase">Rating 5.0 on clutch</button>
                </div>


                <div className="card relative w-full h-[300px] md:h-full bg-[#212121] rounded-md flex justify-center items-center cursor-pointer">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute left-10 bottom-10 px-1 py-1  border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold uppercase ">business bootcamp alumni</button>
                </div>

            </div>

        </div >
    )
}

export default WorkCards