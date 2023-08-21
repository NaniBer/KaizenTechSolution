import "./App.css";
import TopComponent from "./Components/TopComponent";
import Intro from "./Sections/Intro";
import Expertise from "./Sections/Expertise";
import WhyUs from "./Sections/WhyUs";
import PartnerWithUs from "./Sections/PartnerWithUs";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="h-screen">
      <TopComponent />
      <div className="flex justify-center items-center mt-24 mb-24">
        <Intro />
      </div>
      <div className="">
        <Expertise />
      </div>
      <WhyUs />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}

export default App;
