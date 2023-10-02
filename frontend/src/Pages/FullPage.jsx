import TopComponent from "../Components/TopComponent";
import Intro from "../Sections/Intro";
import Expertise from "../Sections/Expertise";
import WhyUs from "../Sections/WhyUs";
import PartnerWithUs from "../Sections/PartnerWithUs";
import Footer from "../Sections/Footer";
const FullPage=()=>{
    return (
        <div className="">
            <div className="h-screen flex flex-col ">
                <div>
                    <TopComponent />
                </div>
                <div className="flex justify-center items-center flex-1">
                    <Intro />
                </div>
            </div>
            <div className="">
                <div className="flex w-full md:absolute lg:-bottom-44 md:-bottom-8 justify-center items-center" >
                    <Expertise />
                </div>
                <WhyUs />
            </div>
            <PartnerWithUs />
            <Footer />
    </div>
    )
}

export default FullPage