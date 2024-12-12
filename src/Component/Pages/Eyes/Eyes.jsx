import { useEffect, useState } from 'react';
import image from '../../../assets/images/Top-Viewbbcbv-1-1440x921.jpg';

const Eyes = () => {
    const [eyeRotation, setEyeRotation] = useState(0);
    const [pupilRotation, setPupilRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setEyeRotation(angle);

            const pupilAngle = (angle - 180) * 0.3; 
            setPupilRotation(pupilAngle);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden"
        >
            <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image})` }}
                data-scroll
                data-scroll-section
                data-scroll-speed="-0.7"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-20">

                    {/* Left Eye */}
                    <div
                        className="w-[12vw] relative h-[12vw] bg-gradient-to-tl from-zinc-800 via-zlue-600 to-zinc-500 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                        style={{
                            transform: `rotate(${eyeRotation}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        <div className="w-2/3 h-2/3 bg-white rounded-full flex justify-center items-center absolute shadow-md"
                            style={{
                                transform: `rotate(${pupilRotation}deg)`,
                                transition: 'transform 0.2s ease-out',
                            }}
                        >
                            <div className="w-1/2 h-1/2 bg-black rounded-full relative">
                                <div
                                    className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-md"
                                    style={{
                                        transform: `rotate(${pupilRotation}deg)`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Eye */}
                    <div
                        className="w-[12vw] relative h-[12vw] bg-gradient-to-tl from-zinc-800 via-zlue-600 to-zinc-500 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                        style={{
                            transform: `rotate(${eyeRotation}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        <div className="w-2/3 h-2/3 bg-white rounded-full flex justify-center items-center absolute shadow-md"
                            style={{
                                transform: `rotate(${pupilRotation}deg)`,
                                transition: 'transform 0.2s ease-out',
                            }}
                        >
                            <div className="w-1/2 h-1/2 bg-black rounded-full relative">
                                <div
                                    className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-md"
                                    style={{
                                        transform: `rotate(${pupilRotation}deg)`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Eyes;
