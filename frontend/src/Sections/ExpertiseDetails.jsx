import detailsList from "../Data/expertiseDetailsData.json"
const ExpertiseDetails=()=>{
    return(
        <div className="bg-black text-white pt-10 pb-15 lg:px-72 px-8 " id="expertise">
            <p className="text-xl text-center tracking-wide">Our Expertise</p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16"></div>
                <div className="mt-10 ">
                {detailsList.map((items)=>(

                <div className=" lg:mb-5 mb-2  p-6 lg:text-lg">
                   <p className=" font-semibold"> <span className="bg-red rounded-full h-3 w-3 inline-block mr-2"></span>
                    {items.title}
                    <span className="text-red"> :</span>
                    </p>
                    <p className="mb-6 mt-2 tracking-wider">{items.description}</p>
                        
                    
                </div>
                ))}
            </div>

                </div>
        </div>
    )

}
export default ExpertiseDetails