import LandingElements from "./LandingElements";
import LandingText from "./LandingText";

const LandingPage = () => {
    return (
        <div
            className="w-full h-screen text-zinc-100 bg-zinc-900 pt-1"
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.3"
        >
            <LandingText />
            <LandingElements />
        </div>
    );
};

export default LandingPage;
