import { NavLink,Route, Router } from "react-router-dom"
import Intro from "../Sections/Intro"
import Expertise from "../Sections/Expertise"
import Footer from "../Sections/Footer"
const TopComponent=()=>{
    return(

            <div className=" text-white lg:text-lg text-sm flex bg-black h-20 pt-5 pr-20 justify-between scroll-smooth">   
            <img src={require("../Assets/klogo3.png")} className="lg:h-10 h-8 lg:ml-20 ml-8" alt=""/>
            <div className=" text-white lg:text-lg text-sm flex ">
                <p className="mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red"><a href="/#home">Home</a></p>
                <p className="mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red"><a href="/#about">About</a></p>
                <p className="mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red">Portfolio</p>
                <p className="mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red"><a href="#contact">Contact</a></p>
            </div>
        </div>

    )
}
 
export default TopComponent 