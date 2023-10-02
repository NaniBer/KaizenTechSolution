import { useNavigate } from "react-router-dom"
const Intro=()=>{
    const navigate=useNavigate()
   
    const handleClick=()=>{
        navigate('/details')

    }

    return(
        <div className="flex justify-center items-center h-full w-full bg-black text-white pt-12 md:pt-0 lg:pt-0">
        <div className="flex flex-col justify-center items-center lg:mb-0 mb-10 md:mb-56 " id="home">
            <img src={require("../Assets/klogo5.png")} className="md:h-56 h-32" alt=""/>
            <p className="lg:w-3/4 mt-10 leading-tight tracking-widest lg:text-lg lg:font-semibold text-center text-base lg:m-0 m-5 md:mx-56 ">Welcome to Kaizen Digital Solutions.
               <br></br> Empowering Your Business with Transformational and Progressive Tech Solutions.</p>
            <button className="w-44 mt-16 border-2 rounded-3xl p-3 border-red lg:font-semibold lg:mb-20 tracking-wider text-[13px] cursor-pointer" onClick={handleClick}>Learn more</button>
            
        </div>
 
        </div>



    )
}
export default Intro