import { useNavigate } from "react-router-dom"
const Expertise=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
            const handleScroll = () => {
            const targetDiv = document.getElementById('expertise');
            if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
            }
        };

        navigate('/details');
        setTimeout(handleScroll, 0);

        // navigate('/#expertise')

    }

    return(
        <div className="flex lg:m-10 lg:ml-20 justify-around bg-white lg:h-64 h-12 items-center lg:p-32 py-16 pl-3 w-11/12 ">

            <div className="lg:w-24 w-16 cursor-pointer" onClick={handleClick}>
                <img src={require("../Assets/software.png")} className="lg:h-20 lg:ml-2 ml-5 h-6 lg:hover:h-24 hover:h-10"/>
                <p className="uppercase font-mono text-center lg:text-base md:text-sm text-[8px] lg:hover:text-lg md:hover:text-base">Custom software development</p>
            </div>
            <div className="w-0.5 h-10 bg-red lg:ml-5 ml-3 mt-8"></div>


            <div className=" lg:w-24 md:w-20 w-16 lg:ml-10 ml-2 cursor-pointer" onClick={handleClick}>
                <img src={require("../Assets/web.png")}  className="lg:h-20 lg:ml-2 ml-5 h-6 lg:hover:h-24 hover:h-10"/>
                <p className="uppercase font-mono text-center lg:text-base md:text-sm text-[8px] lg:hover:text-lg md:hover:text-base">Web and mobile app development</p>
            </div>
            <div className="w-0.5 h-10 bg-red lg:ml-5 ml-3 mt-8"></div>


            <div className="lg:w-24 md:w-20 w-16 lg:ml-10 ml-2 cursor-pointer" onClick={handleClick}>
                <img src={require("../Assets/digital.png")}  className="lg:h-20 lg:ml-2 ml-5 h-6 lg:hover:h-24 hover:h-10"/>
                <p className="uppercase font-mono text-center lg:text-base md:text-sm text-[8px] lg:hover:text-lg md:hover:text-base">digital marketing</p>
            </div>
           <div className="w-0.5 h-10 bg-red lg:ml-5 ml-2 mt-8"></div>


            <div className="lg:w-24 md:w-20 w-16 lg:ml-10 ml-2 cursor-pointer" onClick={handleClick}>
                <img src={require("../Assets/social.png")}  className="lg:h-20 lg:ml-2 ml-5 h-6 lg:hover:h-24 hover:h-10"/>
                <p className="uppercase font-mono text-center lg:text-base md:text-sm text-[8px] lg:hover:text-lg md:hover:text-base">Social media management</p>
            </div>
           <div className="w-0.5 h-10 bg-red lg:ml-5 ml-2 mt-8"></div>


            <div className="lg:w-24 md:w-20 w-16 lg:ml-10 ml-2 pr-2 cursor-pointer " onClick={handleClick}>
                <img src={require("../Assets/graphics.png")}  className="lg:h-20 lg:ml-2 ml-3 h-6 lg:hover:h-24 hover:h-10"/>
                <p className="uppercase font-mono text-center lg:text-base md:text-sm text-[8px] lg:hover:text-lg hover:text-base">Graphics Design</p>
            </div>
        </div>
    )
} 

export default Expertise