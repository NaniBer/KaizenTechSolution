const Footer =()=>{
    return(
        <div className="flex justify-around items-center mt-8 pb-10">
            <img src={require("../Assets/klogo3.png")} className="h-16 ml-24" alt=""/>
            <div>
                <div className="flex mb-3">
                    <img src={require("../Assets/phone.png")} className="h-8" alt=""/>
                    <p className="text-lg font-semibold">091122334455</p>
                </div>
                <div className="flex  mb-3">
                    <img src={require("../Assets/location.png")} className="h-8" alt=""/>
                     <p className="text-lg font-semibold ">Bole Garad 10th Floor</p>
                </div>
                <div className="flex">
                    <img src={require("../Assets/twitter.png")} className="h-8 mr-5" alt=""/>
                    <img src={require("../Assets/instagram.png")} className="h-8 mr-5" alt=""/>
                    <img src={require("../Assets/linkedin.png")} className="h-8 mr-5" alt=""/>
                   
                </div>
            </div>
            <div className="mt-1.5 bg-red h-32 w-0.5"></div>
            <div className="flex justify-around items-center "> 
                <p className="text-lg font-semibold text-center pr-32">Welcome to the Future.<br></br> 
                Welcome to Kaizen Technology Solutions</p>
            </div>
        </div>
    )

}
export default Footer