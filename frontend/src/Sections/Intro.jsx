import { useNavigate } from "react-router-dom"
const Intro=()=>{
    const navigate=useNavigate()
   
    const handleClick=()=>{
        navigate('/details')

    }

    return(
        <div className="flex justify-center items-center h-full w-full ml-20 mr-20">
        <div className="flex flex-col lg:h-1/3 lg:w-2/3 justify-center items-center" id="home">
            <img src={require("../Assets/kaizenlogo.png")} className=" lg:h-1/3 lg:w-1/2" alt=""/>
            <p className="lg:w-1/2 mt-10 leading-tight tracking-widest lg:text-lg lg:font-semibold">Welcome to Kaizen Technology Solutions.
Empowering Your Business with Transformational and progressive Tech Solutions.</p>
            <button className="w-56 mt-16 border-2 rounded-3xl p-3 border-red lg:font-semibold tracking-wider text-lg cursor-pointer" onClick={handleClick}>Learn more</button>
            
        </div>
        <div className="h-2/3 ">
            <img src={require("../Assets/redpuzzle.png")} className="h-full w-full hidden lg:block" alt=""/>
        </div>
        </div>



    )
}
export default Intro