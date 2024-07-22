const About=()=>{
    return (
        <div className="w-11/12 max-w-[1150px] text-white mx-auto flex flex-col justify-center items-center mt-[200px] gap-y-20" id="ABOUT">
            <h1 className="text-[40px] font-medium">About Me</h1>
            <div className="flex gap-x-[10rem] flex-wrap gap-y-5">
                <div className="bg-richblack-900  p-4 pb-9 rounded-lg -rotate-6  ">
                    <div className="bg_shivam w-[300px] h-[400px] rounded-lg "></div>
                </div>
                <div className="max-w-[600px]">
                    <p className="font-semibold text-[30px]">Shivam Kumar</p>
                    <div className="flex text-black font-bold gap-x-6 my-4 cursor-pointer flex-wrap gap-y-4">
                        <p className="bg-yellow-50 px-4 rounded-lg">Frontend</p>
                        <p className="bg-yellow-50 px-4 rounded-lg">BackEnd</p>
                        <p className="bg-yellow-50 px-4 rounded-lg">Full Stack</p>
                        <p className="bg-yellow-50 px-4 rounded-lg">MicroServices</p>
                    </div>
                    <p className="text-[20px] font-medium text-richblack-25    ">I learn & build stuff related to Frontend,backend,and Microservices,Generative AI and more..
                    I also have some Experience in Docker ,Redis and WebSockets</p>
                    <div className="bg-blue-200  px-8  py-1 flex justify-center items-center rounded-lg w-[120px] mt-4 font-bold
                    text-[20px] cursor-pointer">
                        <a href="https://drive.google.com/file/d/1Xk5zuyNAGo4Ovnb5m2zBn4YW0dc_0QJs/view?usp=sharing" target="_blank">
                        Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );  
}
export default About;
