import { useNavigate } from "react-router-dom"
import expertiseList from "../Data/expertiseListData.json"
const Expertise=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/details')

    }
    return(
        <div className="bg-black text-white text-center pt-10 pb-10 h-screen" id="about">
            <p className="text-xl tracking-wide">Our Expertise</p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16"></div>
                <p className="mt-5 w-1/2">At Kaizen Technology Solutions, we offer a wide range of services tailored to meet the unique needs of your business.</p>
            </div>

            <div className="mt-10 p-2 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center ">
                {expertiseList.map((items)=>(

                <div className=" mb-5 border-2 rounded-lg border-red lg:h-72 md:h-56 h-16 w-64 p-6 flex flex-col justify-evenly ">
                        <p className="mb-6 lg:mt-1 mt-5">{items.title} </p>
                        <p className="mb-5 hidden md:block">{items.text}</p>
                        <button className="hidden lg:block" onClick={handleClick}>Learn more 
                            <span className="ml-2 text-red font-bold">></span>
                        </button>
                    
                </div>
                ))}
            </div>
            
            
        </div>
    )
} 

export default Expertise