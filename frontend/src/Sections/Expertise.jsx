import { useNavigate } from "react-router-dom"
const expertiseList=[
    {
        title: 'Custom Software Development',
        text:'We specialize in developing customized software solutions that align perfectly with your business objectives.'
    },
    {
        title: 'Web and Mobile App Development ',
        text:'In the rapidly evolving digital landscape, having a strong online presence is essential.'
    },
    {
        title: 'Cloud Solutions ',
        text:'Embrace the power of the cloud with our advanced cloud solutions.'
    },
    {
        title: 'IT Consulting',
        text:'Our experienced consultants are here to provide strategic guidance and support to help you make the right technology decisions. '
    },
    {
        title: 'Graphics Design',
        text:'Our dedicated team of skilled designers combines creativity, technical proficiency, and a deep understanding.'
    },

]
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
            <div className="mt-10 grid grid-cols-3 justify-items-center items-center ">
                {expertiseList.map((items)=>(

                <div className=" mb-5 border-2 border-red h-72 w-64 p-6 flex flex-col justify-center items-center">
                        <p className="mb-6">{items.title} </p>
                        <p className="mb-6">{items.text}</p>
                        <button onClick={handleClick}>Learn more 
                            <span className="ml-2 text-red font-bold">></span>
                        </button>
                    
                </div>
                ))}
            </div>
            
            
        </div>
    )
} 

export default Expertise