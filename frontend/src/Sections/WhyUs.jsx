
const WhyUs=()=>{
    return(
        <div className="text-black text-center pt-10 pb-10">
            <p className="text-xl font-bold tracking-wide">Why Us</p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16">
                </div>
               
            </div>
            <div className="mx-56 mt-10 flex flex-col justify-center items-center">
                
                <div className="shadow-xl border-2 border-black text-left h-56 w-2/3 flex mr-10 mb-4 pl-5">
                    <div>
                        <p className="text-xl font-bold mt-5 mb-3">Tailored Solution</p>
                    
                        <p className="mr-4 text-lg">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal results and maximum ROI.</p>
                        
                    </div>
                    <img src={require("../Assets/Whyus1.png")} className="h-56" alt=""/>
                </div>

            
                <div className="shadow-xl border-2 border-black text-left h-56 w-2/3 flex mr-10 mb-4 pl-5">
                        <div>
                            <p className="text-xl font-bold mt-5 mb-3">Innovation Driven Approach</p>
                        
                            <p className="mr-4 text-lg">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal results and maximum ROI.</p>
                            
                        </div>
                        
                </div>
                
                
                <div className="shadow-xl border-2 border-black text-left h-56 w-2/3 flex mr-10 mb-4 ">
                    <img src={require("../Assets/Whyus2.png")} className="h-56 pr-5" alt=""/>
                    <div>
                        <p className="text-xl font-bold mt-5 mb-3">Expert Team</p>
                    
                        <p className="mr-4 text-lg">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal results and maximum ROI.</p>
                        
                    </div>
                    
                </div>
                
                <div className="shadow-xl border-2 border-black text-left h-56 w-2/3 flex mr-10 mb-4 pl-5">
                    <div>
                        <p className="text-xl font-bold mt-5 mb-3">Quality Assurance</p>
                    
                        <p className="mr-4 text-lg">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal results and maximum ROI.</p>
                        
                    </div>
                </div>


                <div className="shadow-xl border-2 border-black text-left h-56 w-2/3 flex mr-10 mb-4 pl-5">
                    <div>
                        <p className="text-xl font-bold mt-5 mb-3">Timely Delivery</p>
                        <p className="mr-4 text-lg">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal results and maximum ROI.</p>
                    </div>
                    <img src={require("../Assets/Whyus3.png")} className="h-56" alt=""/>
                </div>

            </div>

        </div>
    )
}

export default WhyUs