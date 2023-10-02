import "./App.css";
import { Route, Routes } from "react-router-dom";
import FullPage from "./Pages/FullPage";
import DetailsPage from "./Pages/DetailsPage";

import Portfolio from "./Sections/Portfolio";
import OurTeam from "./Sections/OurTeam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />} />

      <Route path="/details" element={<DetailsPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ourteam" element={<OurTeam />} />
    </Routes>
  );
}

export default App;
