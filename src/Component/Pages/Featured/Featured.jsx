const Featured = () => {
    return (
        <div className="w-full py-10">
            <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-8xl font-neuMontreal tracking-tight">Featured Projects</h1>
            </div>

            <div className="px-20">
                <div className="cards relative w-full flex gap-20 bg-red-500 p-3 md:flex-row flex-col">



                    {/* First Card */}
                    <div className="cardContainer w-full md:w-1/2 h-[75vh] bg-red-500 overflow-hidden">

                        {/* Centered text */}
                        <h1 className="absolute w-full text-green-500 top-48 text-center md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase">
                            {
                                "cardboard spaceship".split('').map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </h1>

                        <div className="w-full h-full bg-green-400 rounded-xl">
                            <div
                                className="w-full h-full bg-cover"
                                style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")' }}
                            ></div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="cardContainer w-full md:w-1/2 h-[75vh] bg-red-500 overflow-hidden">

                        {/* Centered text */}
                        <h1 className="absolute w-full text-green-500 text-center bottom-48 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase">
                            {
                                "Ah2 & matt horn".split('').map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </h1>

                        <div className="w-full h-full bg-green-400 rounded-xl">
                            <div
                                className="w-full h-full bg-cover"
                                style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png")' }}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Featured;
