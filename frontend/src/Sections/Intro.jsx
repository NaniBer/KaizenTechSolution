import { useNavigate } from "react-router-dom"
const Intro=()=>{
    const navigate=useNavigate()
   
    const handleClick=()=>{
        navigate('/details')

    }

    return(
        <div className="flex justify-center items-center h-full w-full bg-black text-white">
        <div className="flex flex-col justify-center items-center" id="home">
            <img src={require("../Assets/klogo5.png")} className="md:h-48 h-16" alt=""/>
            <p className="lg:w-3/4 mt-10 leading-tight tracking-widest lg:text-lg lg:font-semibold text-center text-base lg:m-0 m-5 ">Welcome to Kaizen Technology Solutions.
               <br></br> Empowering Your Business with Cutting-edge Tech Solutions.</p>
            <button className="w-56 mt-16 border-2 rounded-3xl p-3 border-red lg:font-semibold tracking-wider text-lg cursor-pointer" onClick={handleClick}>Learn more</button>
            
        </div>
 
        </div>



    )
}
export default Intro