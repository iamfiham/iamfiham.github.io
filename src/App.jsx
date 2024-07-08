import React from "react";
import "./App.css";
import Home from "./layouts/Home";
import ProjectSection from "./layouts/ProjectSection";
import Footer from "./layouts/Footer";
import SkillSection from "./layouts/SkillSection";
import ProjectDetail from "./components/ProjectDetail";
import JourneySection from "./layouts/JourneySection";
import SplitedHeading from "./components/SplitedHeading";

function App() {
    return (
        <div className="overflow-hidden">
            <div className="px-4">
                <Home />
            </div>
            <div className="h-28 sm:h-36 md:h-48" />
            <div className="mx-auto w-[min(1280px,_100%)] px-4">
                <ProjectSection />
                <div className="h-28 sm:h-36 md:h-48" />
                <JourneySection />
                <SplitedHeading />
            </div>
            <div className="mt-28 h-[1px] bg-white/5 sm:mt-36 md:mt-48" />
            <div className="mx-auto w-[min(1280px,_100%)] px-4">
                <Footer />
            </div>
        </div>
    );
}

export default App;
