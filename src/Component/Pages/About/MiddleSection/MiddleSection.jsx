import LeftSection from "./LeftSection/LeftSection"
import RightSection from "./RightSection/RightSection"

const MiddleSection = () => {
    return (
        <div className="w-full border-t-[2px] border-[#a1b562] mt-20 flex">

            <LeftSection></LeftSection>

            <RightSection></RightSection>

        </div>
    )
}

export default MiddleSection