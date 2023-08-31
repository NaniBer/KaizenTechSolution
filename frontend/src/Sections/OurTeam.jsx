import Footer from "./Footer"
import TopComponent from "../Components/TopComponent"


const OurTeam=()=>{
    return (
        <div>
            <TopComponent/>
            <div className="mt-10 text-center lg:pt-10 pb-5 lg:pb-16">
                <p className="text-xl tracking-wide">Our Team</p>
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-1.5 bg-red h-0.5 w-16">
                       
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-2 md:ml-20 ml-8">
                   <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10 flex justify-center items-center rounded-md ">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                    </div>
                    <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10  flex justify-center items-center rounded-md">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>

                    </div>
                    <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10 flex justify-center items-center rounded-md">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                    </div>
                    <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10 flex justify-center items-center rounded-md">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                    </div>
                    <div className="hidden md:block">
                        <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10 flex justify-center items-center rounded-md">
                            <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="h-72 md:h-96 w-32 md:w-64 bg-grey mt-10 flex justify-center items-center rounded-md">
                            <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                        </div>
                        
                    </div>
                    </div> 
                
            </div>
        <Footer/>
        </div>
    )
}
export default OurTeam