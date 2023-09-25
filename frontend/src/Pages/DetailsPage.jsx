import TopComponent from "../Components/TopComponent";
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