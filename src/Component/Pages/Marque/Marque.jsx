import { motion } from "framer-motion";

const Marque = () => {
    return (
        <div
            className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
            data-scroll
            data-scroll-section
            data-scroll-speed="0.1"
        >
            <div className="border-b-2 border-t-2 gap-28 overflow-hidden border-zinc-200 flex whitespace-nowrap">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 5, repeat: Infinity }}
                    className="text-[13vw] leading-none font-founders font-semibold uppercase -mb-10 pt-10">
                    We Are Puchi'o.
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 5, repeat: Infinity }}
                    className="text-[13vw] leading-none font-founders font-semibold uppercase -mb-10 pt-10">
                    We Are Puchi'o.
                </motion.h1>
            </div>
        </div>
    );
};

export default Marque;
