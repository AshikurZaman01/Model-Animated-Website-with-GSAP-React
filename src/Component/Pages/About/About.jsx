import MiddleSection from "./MiddleSection/MiddleSection"

const About = () => {
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl "
            data-scroll
            data-scroll-section
            data-scroll-speed="0.1" >

            <h1 className="font-neuMontreal text-[3vw] leading-[3.5vw] ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain com­plex ideas, and hire great peo­ple.</h1>


            <MiddleSection></MiddleSection>

        </div>
    )
}

export default About