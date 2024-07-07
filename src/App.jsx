import React from "react";
import "./App.css";
import Home from "./layouts/Home";
import ProjectSection from "./layouts/ProjectSection";
import Footer from "./layouts/Footer";

function App() {
    return (
        <div>
            {/* <div className="overflow-hidden"> */}
            <div className="px-4">
                <Home />
            </div>
            <div className="h-28" />
            <div className="mx-auto w-[min(1280px,_100%)] px-4">
                <ProjectSection />
            </div>
            <div className="mt-28 h-[1px] bg-white/5" />
            <div className="mx-auto w-[min(1280px,_100%)] px-4">
                <Footer />
            </div>
        </div>
    );
}

export default App;
