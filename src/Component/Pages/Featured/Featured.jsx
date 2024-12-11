const Featured = () => {
    return (
        <div className="w-full py-10">

            <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-8xl font-neuMontreal tracking-tight">Featured Projects</h1>
            </div>

            <div className="px-20">
                <div className="cards w-full flex gap-20">
                    <div className="cardContainer w-1/2 h-[75vh] bg-red-500 overflow-hidden">
                        <div className="w-full h-full bg-green-400 rounded-xl">
                            <div
                                className="w-full h-full bg-cover"
                                style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Featured;
