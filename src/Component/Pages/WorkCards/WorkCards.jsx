
const WorkCards = () => {
    return (
        <div className="w-full bg-zinc-100 h-screen flex gap-5 p-32">

            <div className="cardContainer h-[50vh] w-1/2">
                <div className="card relative w-full h-full bg-[#004d43] rounded-md flex justify-center items-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-3  border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold">&copy;2022-2024</button>
                </div>
            </div>

            <div className="cardContainer h-[50vh] w-1/2 flex gap-5">

                <div className="card relative w-full h-full bg-[#004d43] rounded-md flex justify-center items-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-3  border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold">&copy;2022-2024</button>
                </div>


                <div className="card w-full h-full bg-[#004d] rounded-md">                </div>
            </div>

        </div >
    )
}

export default WorkCards