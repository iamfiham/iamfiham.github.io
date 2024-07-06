import React from "react";
import "./App.css";
import ProjectDetail from "./components/ProjectDetail";
import MinimalDesign from "./layouts/MinimalDesign";
import Home from "./layouts/Home";
import ProjectSection from "./layouts/ProjectSection";
import ThirdSection from "./layouts/ThirdSection";

function App() {
    return (
        <div>
            {/* <MinimalDesign />
            <ProjectDetail /> */}
            <div className="px-4">
                <Home />
            </div>
            <div className="h-28" />
            <div className="mx-auto w-[min(1280px,_100%)] px-4">
                <ProjectSection />
                <div className="h-56" />
                <ThirdSection />
                <div className="h-28" />
            </div>
        </div>
    );
}

export default App;
