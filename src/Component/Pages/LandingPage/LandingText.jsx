import { motion } from "framer-motion"
import image from "../../../assets/images/content-image01.jpg"

const LandingText = () => {


    return (

        <div className="textStructure mt-44 px-20">

            {
                ["We Create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={index} className="masker" >
                        <div className="w-fit flex rounded ">

                            {
                                index === 1 && (
                                    <motion.div
                                        initial={{ width: "0vw" }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className="w-[9vw] h-[5vw] mr-2 rounded overflow-hidden  relative -top-[1vw]">
                                        <img src={image} alt="" />
                                    </motion.div>
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