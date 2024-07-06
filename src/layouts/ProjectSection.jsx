import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useData from "../hooks/useData";

function ProjectSection() {
    const target = useRef(null);
    const heading = useRef(null);
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const { allProjects } = useData();

    useGSAP(() => {
        const calculation = () => {
            const headingRectHeight = heading.current.getBoundingClientRect().height;
            return `100% ${headingRectHeight + 48}px`;
        };

        let responsiveGsap = gsap.matchMedia();
        responsiveGsap.add("(min-width:768px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: target.current,
                    start: "0% 48px",
                    end: calculation(),
                    scrub: false,
                    // markers: true,
                    pin: heading.current,
                },
            });
        });
    });

    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]" ref={target}>
            <div>
                <div ref={heading}>
                    <h2 className="mb-6 text-4xl/none font-medium tracking-tighter text-neutral-200">Projects</h2>
                    <h3 className="text-base/snug tracking-tighter text-neutral-400">
                        Showcasing dynamic web experiences crafted with React, Tailwind, and animation libraries.
                    </h3>
                </div>
            </div>
            <div className="flex flex-col gap-16">
                {allProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
