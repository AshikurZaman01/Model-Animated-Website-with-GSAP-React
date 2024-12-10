
const LandingText = () => {
    return (

        <div className="textStructure mt-44 px-20">

            {
                ["We Create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={index} className="masker" >
                        <div className="w-fit flex ">

                            {
                                index === 1 && (
                                    <div className="w-[9vw] h-[5vw] mr-2 bg-red-300 relative -top-[1vw]">

                                    </div>
                                )
                            }

                            <h1 className="uppercase text-[7vw] font-medium font-founders leading-[5rem] tracking-tighter flex items-center">{item}</h1>
                        </div>
                    </div>
                ))
            }


        </div>

    )
}

export default LandingText