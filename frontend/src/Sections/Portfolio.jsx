import Footer from "./Footer"
import TopComponent from "../Components/TopComponent"


const Portfolio=()=>{
    return (
        <div>
            <TopComponent/>
            <div className="mt-10 text-center lg:pt-10 pb-5 lg:pb-16">
                <p className="text-xl tracking-wide">Portfolio</p>
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-1.5 bg-red h-0.5 w-16">
                       
                    </div>
                    <div className="h-32 lg:h-64 w-80 lg:w-10/12 bg-grey mt-16 flex justify-center items-center ">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                    </div>
                    <div className="h-32 lg:h-64 w-80 lg:w-10/12 bg-grey mt-10  flex justify-center items-center">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>

                    </div>
                    <div className="h-32 lg:h-64 w-80 lg:w-10/12 bg-grey mt-10 flex justify-center items-center">
                        <img src={require("../Assets/loading.png")} className="h-16" alt=""/>
                    </div>
                    </div> 
                
            </div>
        <Footer/>
        </div>
    )
}
export default Portfolio