import { motion } from "framer-motion";
import { useState } from "react";
import { Power4 } from "gsap";

const Featured = () => {
    const [isHoveringFirst, setIsHoveringFirst] = useState(false);
    const [isHoveringSecond, setIsHoveringSecond] = useState(false);

    return (
        <div className="w-full py-10">
            <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-8xl font-neuMontreal tracking-tight">Featured Projects</h1>
            </div>

            <div className="px-20">
                <div className="cards relative w-full flex gap-20  p-3 md:flex-row flex-col">

                    {/* First Card */}
                    <div
                        onMouseEnter={() => setIsHoveringFirst(true)}
                        onMouseLeave={() => setIsHoveringFirst(false)}

                        className="cardContainer w-full md:w-1/2 h-[75vh]  overflow-hidden"
                    >
                        {/* Centered text */}
                        <motion.h1
                            className="absolute w-full text-green-500 top-48 text-center md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHoveringFirst ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: Power4.easeInOut }}
                        >
                            {"cardboard spaceship".split('').map((item, index) => (
                                <motion.span
                                    className="inline-block"
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={isHoveringFirst ? { y: "0%" } : { y: "100%" }}
                                    transition={{ ease: Power4.easeInOut, delay: index * 0.05 }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <div className="w-full h-full bg-green-400 rounded-xl">
                            <div
                                className="w-full h-full bg-cover"
                                style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")' }}
                            ></div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div
                        onMouseEnter={() => setIsHoveringSecond(true)}
                        onMouseLeave={() => setIsHoveringSecond(false)}
                        className="cardContainer w-full md:w-1/2 h-[75vh]  overflow-hidden"
                    >
                        {/* Centered text */}
                        <motion.h1
                            className="absolute w-full text-green-500 text-center bottom-48 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHoveringSecond ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: Power4.easeInOut }}
                        >
                            {"Ah2 & matt horn".split('').map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </motion.h1>

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
