import { useState } from "react";
import mongoDB from "../assets/MongoDB.svg";
import nodeJs from "../assets/NodeJs.svg"
const categories=["FrontEnd","BackEnd","MicroServices","Others"]
const data={
    "FrontEnd":[
        {title:"HTML",image:require('../assets/html.png')},
        {title:"CSS",image:require("../assets/css.png")},
        {title:"JS",image:require("../assets/js.png")},
        {title:"React",image:require("../assets/React.png")},
        {title:"Redux",image:require("../assets/redux.png")},
        {title:"Tailwind",image:require("../assets/Tailwind.png")},
    ],
    "BackEnd":[
        {title:"NodeJS",image:nodeJs},
        {title:"ExpressJS",image:require("../assets/Express.png")},
        {title:"MongoDB",image:mongoDB},
    ],
    "MicroServices":[
        {title:"Redis",image:require("../assets/redis.png")},
        {title:"Dcoker",image:require("../assets/docker.png")},
        {title:"Socket IO",image:require("../assets/socket.png")},
    ],
    "Others":[
        {title:"C++",image:require("../assets/c++.png")},
        {title:"Python",image:require("../assets/python.png")},
        {title:"Java",image:require("../assets/java.png")},
        {title:"VS Code",image:require("../assets/vscode.png")},
        {title:"Postman",image:require("../assets/postman.png")},
        {title:"Jupyter",image:require("../assets/jupyter.png")},
    ]
}
const TechStack=()=>{
    const [btn,setBtn]=useState("FrontEnd");
    return (
        <div className="-11/12 max-w-[1150px] text-white mx-auto flex flex-col justify-center items-center mt-[80px] gap-y-20 " id="SKILLS">
            <h1 className="font-semibold text-[50px]">Tech Stack</h1>
            <div className="flex font-bold gap-x-7 text-[20px] items-center cursor-pointer bg-richblack-900 py-3  px-3 rounded-lg
            flex-wrap">
            {
                categories.map((category,ind)=>{
                    return <p className={`${btn==category?"bg-yellow-50  ":"text-white"} px-9 py-3 rounded-lg text-black`}
                    onClick={()=>setBtn(category)}>{category}</p>
                })
            }
            </div>
            <div className="flex flex-wrap gap-x-10  gap-y-8 justify-center">
            {
                data[btn].map((tech)=>{

                    return  <div className="flex flex-col items-center gap-y-2 hover:scale-95 duration-200 cursor-pointer">
                                <div className="bg-richblack-900 bg-opacity-50  rounded-full w-[120px] h-[120px] flex justify-center items-center">
                                    <img src={tech.image} width={"80px"} height={"80px"}/>
                                </div>
                                <div className="text-white text-[20px] font-semibold">{tech.title}</div>
                            </div>
                })    
            }
            </div>
        </div>
    );  
}
export default TechStack;