import { FaArrowUp } from "react-icons/fa6";

const LandingElements = () => {
    return (
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5">

            {
                ['For public and private companies', 'From the first pitch of IPO'].map((item, index) => <p key={index} className="font-light tracking-tight leading-none">
                    {item}
                </p>)
            }

            <div>
                <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full text-sm uppercase">Start The Project</div>

                <div className="w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center ">
                    <span className="rotate-[45deg]">
                        <FaArrowUp />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default LandingElements