import TopComponent from "../Components/TopComponent";
import Intro from "../Sections/Intro";
import Expertise from "../Sections/Expertise";
import WhyUs from "../Sections/WhyUs";
import PartnerWithUs from "../Sections/PartnerWithUs";
import Footer from "../Sections/Footer";
import Portfolio from "../Sections/Portfolio";
import ExpertiseDetails from "../Sections/ExpertiseDetails";
import AboutUsDetails from "../Sections/AboutUsDetails";
const FullPage=()=>{
    return (
        <div className="">
            <div className="h-screen flex flex-col">
                <div>
                <TopComponent />
                </div>
            <div className="flex justify-center items-center flex-1">
                <Intro />
            </div>
      </div>
      <div>
        <Expertise />
      </div>
      <WhyUs />
      <PartnerWithUs />
      <Footer />
    </div>
    )
}

export default FullPage