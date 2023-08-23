import "./App.css";
import { HashRouter, Route, Routes, NavLink } from "react-router-dom";
import FullPage from "./Pages/FullPage";
import DetailsPage from "./Pages/DetailsPage";
import Intro from "./Sections/Intro";
import Expertise from "./Sections/Expertise";
import Footer from "./Sections/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />} />

      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
