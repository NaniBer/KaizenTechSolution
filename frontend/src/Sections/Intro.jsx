import { useNavigate } from "react-router-dom"
const Intro=()=>{
    const navigate=useNavigate()
   
    const handleClick=()=>{
        navigate('/details')

    }

    return(

        <div className="flex flex-col justify-center items-center" id="home">
            <img src={require("../Assets/kaizenlogo.png")} className="h-20" alt=""/>
            <p className="w-1/2 mt-10 text-center leading-tight tracking-widest text-lg font-light">Welcome to Kaizen Technology Solutions. Empowering Your Business with Cutting-edge Tech Solutions.</p>
            <button className="w-40 mt-16 border-2 rounded-3xl p-3 border-red font-semibold tracking-wider text-lg cursor-pointer" onClick={handleClick}>Learn more</button>
            
        </div>


    )
}
export default Intro