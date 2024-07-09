import "../App.css";
import { TypeAnimation } from 'react-type-animation';
import hero from "../assets/hero.png";
const HeroSection = () => {
    return (
        <div className="HOME w-11/12 max-w-[1150px] text-white mx-auto flex justify-between items-center mt-[100px] flex-wrap
        gap-y-7 ">
            <div className="flex flex-col items-start">
                <h1 className="text-[30px] font-semibold">Hi!!</h1>
                <p className="text-[50px] font-bold">I'm Shivam kumar</p>
                <div className="flex items-center gap-x-3">

                    <p className="text-[25px] ">I am a</p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front End Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Back End Developer',
                            2000,
                            'Full Stack Developer',
                            2000,
                            'Coder',
                            2000
                        ]}
                        wrapper="span"
                        speed={5}
                        style={{ fontSize: '2em', display: 'inline' }}
                        repeat={Infinity}
                        className="text-yellow-50"
                    />
                </div>
                <a href="ABOUT">
                    <div className="bg-blue-200 text-white font-bold px-3 py-2 rounded-lg cursor-pointer mt-4">About Me</div>
                </a>
            </div>
            <div className="w-[300px] h-[300px] rounded-full" 
            style={{backgroundImage:`url(${hero})`,backgroundPosition:"Center",backgroundSize:"cover"}}></div>
        </div>
    );
}
export default HeroSection;
