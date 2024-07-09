// const navText = ["Home", "About", "Skills", "Projects", "Contact"]
const navText = [
    {title:"Home",to:"#HOME"},
    {title:"About",to:"#ABOUT"},
    {title:"Skills",to:"#SKILLS"},
    {title:"Projects",to:"#PROJECTS"},
]
const Navbar = () => {
    return (
        <div className="w-11/12 max-w-[1150px] text-white mx-auto flex justify-between items-center  py-4  flex-wrap scroll-smooth duration-300  transition-all">
            <h1 className="font-bold text-[20px]">Shivam</h1>
            <div className="flex gap-x-10 flex-wrap">
                {
                    navText.map((obj, ind) => {
                        return <a href={obj.to}><div className="font-semibold" key={ind}>{obj.title}</div></a>
                    })
                }
            </div>

        </div>
    );
}
export default Navbar;