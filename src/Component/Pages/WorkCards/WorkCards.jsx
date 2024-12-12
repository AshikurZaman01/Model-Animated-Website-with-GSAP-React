const WorkCards = () => {
    return (
        <div className="w-full bg-zinc-100 h-screen flex flex-col md:flex-row gap-5 py-32 px-10">

            {/* First Card */}
            <div className="cardContainer md:h-[50vh] w-full md:w-1/2 px-5 cursor-pointer transition-transform duration-300 hover:scale-105">
                <div className="card relative w-full h-[300px] md:h-full bg-gradient-to-r from-[#004d43] via-[#006c55] to-[#004d43] rounded-lg shadow-xl flex justify-center items-center overflow-hidden transform transition duration-300 hover:scale-105">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo" />
                    <button className="absolute left-10 bottom-10 px-6 py-2 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold bg-[#212121] opacity-80 hover:opacity-100 transition-opacity duration-300">
                        &copy; 2022-2024
                    </button>
                </div>
            </div>

            {/* Second Row of Cards */}
            <div className="cardContainer md:h-[50vh] w-full md:w-1/2 flex flex-col md:flex-row gap-5">

                {/* Second Card */}
                <div className="card relative w-full h-[300px] md:h-full bg-[#212121] rounded-lg shadow-xl flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo" />
                    <button className="absolute left-10 bottom-10 px-8 py-2 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold text-sm uppercase bg-[#212121] opacity-80 hover:opacity-100 transition-opacity duration-300">
                        Rating 5.0 on Clutch
                    </button>
                </div>

                {/* Third Card */}
                <div className="card relative w-full h-[300px] md:h-full bg-[#212121] rounded-lg shadow-xl flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo" />
                    <button className="absolute left-10 bottom-10 px-2 py-2 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] font-semibold text-sm uppercase bg-[#212121] opacity-80 hover:opacity-100 transition-opacity duration-300">
                        Business Bootcamp Alumni
                    </button>
                </div>

            </div>

        </div>
    );
};

export default WorkCards;
