import TopComponent from "../Components/TopComponent";
import Intro from "../Sections/Intro";
import Expertise from "../Sections/Expertise";
import WhyUs from "../Sections//WhyUs";
import PartnerWithUs from "../Sections//PartnerWithUs";
import Footer from "../Sections//Footer";
import ExpertiseDetails from "../Sections//ExpertiseDetails";
import AboutUsDetails from "../Sections//AboutUsDetails";
const DetailsPage=()=>{
    return (
        <div className="">
            <div className="h-screen flex flex-col">
    
                <TopComponent />
            
           
                <AboutUsDetails />
            </div>
      
        <ExpertiseDetails />
      <Footer />
    </div>
    )
}

export default DetailsPage