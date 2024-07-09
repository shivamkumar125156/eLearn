const proj=[
    {title:"eLearn",image:require('../assets/Project1.jpg'),tech:["MongoDB","ExpressJS","ReactJs","NodeJS","Tailwind CSS"]},
    {title:"chatAPP",image:require('../assets/whatapp.avif'),tech:["MongoDB","ExpressJS","ReactJs","NodeJS","Tailwind CSS","Socket IO"]},
    {title:"eCommerce Landing page",image:require('../assets/ecommerce.jpeg'),tech:["ReactJs","Redux","Tailwind CSS"]},
    {title:"Redis Caching Based Project",image:require('../assets/redisbg.png'),tech:["NodeJS","ExpressJS","Redis"]},
    {title:"Travel Website Landing Page",image:require('../assets/travel.png'),tech:["ReactJs","Tailwind CSS"]},
]
const Projects=()=>{
    return (
        <div className="w-11/12 max-w-[1150px] text-white mx-auto flex flex-col  mt-[80px] pb-[200px]
        gap-y-4" id='PROJECTS'>
            <p className="font-medium text-[40px] text-center">Projects </p>
            <div className="flex gap-7 flex-wrap justify-center">
            {
                proj.map((obj)=>(
                    <div className='bg-richblack-900 p-5  rounded-lg pb-16 max-w-[340px] hover:scale-105 transition-all duration-200'>
                        <div style={{backgroundImage:`url(${obj.image})`,width:"300px",height:"200px",
                        backgroundSize:"cover", backgroundPosition:"center"}}
                        className='rounded-lg '></div>
                        <h1 className='font-bold text-[20px] my-2'> {obj.title}</h1>
                        <div className='flex gap-x-2 text-richblack-50 font-semibold flex-wrap'>
                        {
                            obj.tech.map(x=>(
                                <div>{x}</div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );  
}
export default Projects;