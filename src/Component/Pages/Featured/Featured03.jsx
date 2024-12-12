import { motion } from "framer-motion";
import { useState } from "react";
import { Power4 } from "gsap";


const Featured03 = () => {

    const [isHoveringFirst, setIsHoveringFirst] = useState(false);
    const [isHoveringSecond, setIsHoveringSecond] = useState(false);

    return (
        <div className="px-20 mt-32 mb-20"
            data-scroll
            data-scroll-section
            data-scroll-speed="0.3">
            <div className="cards relative w-full flex gap-20 p-3 md:flex-row flex-col">

                {/* First Card */}
                <div
                    onMouseEnter={() => setIsHoveringFirst(true)}
                    onMouseLeave={() => setIsHoveringFirst(false)}
                    className="cardContainer w-full md:w-1/2 h-[75vh] overflow-hidden"
                >
                    {/* Centered text */}
                    <motion.h1
                        className="absolute w-full text-green-500 top-48 text-center md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHoveringFirst ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: Power4.easeInOut }}
                    >
                        {"trawa".split('').map((item, index) => (
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

                    <motion.div
                        className="w-full h-full bg-green-400 rounded-md"
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="w-full h-full bg-cover rounded-md"
                            style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")' }}
                        ></div>
                    </motion.div>
                </div>

                {/* Second Card */}
                <div
                    onMouseEnter={() => setIsHoveringSecond(true)}
                    onMouseLeave={() => setIsHoveringSecond(false)}
                    className="cardContainer w-full md:w-1/2 h-[75vh] overflow-hidden"
                >
                    {/* Centered text */}
                    <motion.h1
                        className="absolute w-full text-green-500 text-center bottom-48 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-8xl text-6xl font-founders font-semibold tracking-tighter z-10 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHoveringSecond ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: Power4.easeInOut }}
                    >
                        {"premium blend".split('').map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </motion.h1>

                    <motion.div
                        className="w-full h-full bg-green-400 rounded-md"
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="w-full h-full bg-cover rounded-md"
                            style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")' }}
                        ></div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Featured03