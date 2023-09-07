import { NavLink,Route, Router } from "react-router-dom"
import { useState } from "react"
import Intro from "../Sections/Intro"
import Expertise from "../Sections/Expertise"
import Footer from "../Sections/Footer"
const TopComponent=()=>{
     const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleFABToggle = () => {
    if (hiddenClass === "hidden") setHiddenClass("");
    else setHiddenClass("hidden");
  };
    return(

            <div className=" text-white lg:text-lg text-sm flex bg-black h-20 pt-5 pr-20 justify-between scroll-smooth">   
            <img src={require("../Assets/klogo3.png")} className="lg:h-10 h-8 lg:ml-20 ml-8 lg:mr-0 mr-10" alt=""/>
            <div className=" text-white lg:text-lg text-sm flex ">
                <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/#home">Home</a></p>
                <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/#about">About</a></p>
                <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/portfolio">Portfolio</a></p>
                <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="#contact">Contact</a></p>
            </div>


            {/* <div className="visible md:invisible">
                <img
          className="w-5 h-5"
          onClick={handleFABToggle}
          src={require("../Assets/menu.png")}
          alt=""
        />
            <div className="flex flex-col">
                <p className={`cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red ${hiddenClass}`}><a href="/#home">Home</a></p>
                <p className={`cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red ${hiddenClass}`}><a href="/#about">About</a></p>
                <p className={`cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red ${hiddenClass}`}><a href="/portfolio">Portfolio</a></p>
                <p className={`cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red ${hiddenClass}`}><a href="#contact">Contact</a></p>
            </div>
            </div> */}
        </div>

    )
}
 
export default TopComponent 