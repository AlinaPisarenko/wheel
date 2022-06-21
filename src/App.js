import "./App.css";
import Wheel from "./Wheel";
import PersonalPage from "./PersonalPage";
import Navigation from "./Navigation";
import "./sass/main.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Wheel />} />
        <Route path="/home" element={<PersonalPage />} />
      </Routes>
    </div>
  );
}

export default App;
