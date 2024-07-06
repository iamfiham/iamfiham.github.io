import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import note from "../assets/projects/note.png";
import portfolio from "../assets/projects/portfolio.png";
import ecommerce from "../assets/projects/ecommerce.png";

function ProjectSection() {
    const target = useRef(null);
    const heading = useRef(null);
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const projectsData = [
        {
            image: note,
            heading: "Note Taking App",
            subHeading: " Built with React for Seamless User Experience and Efficient Information Organization",
            year: "10th August, 2021",
            url: "https://iamfiham.github.io/note-taking-app/",
        },
        {
            image: ecommerce,
            heading: "E-Commerce Website",
            subHeading: "Leveraging React and Firebase for Dynamic Shopping Experiences and Seamlessly Managed Transactions",
            year: "5th November, 2022",
            url: "https://iamfiham.github.io/e-commerce/",
        },
        {
            image: portfolio,
            heading: "Portfolio Site",
            subHeading: "Crafted with React for a Dynamic and Engaging Presentation of Skills and Projects",
            year: "21th May, 2023",
            url: "https://iamfiham.github.io/portfolio/",
        },
    ];

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
                    markers: true,
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, iure. Facilis, quam delectus labore necessitatibus sint
                        facere, ipsum consectetur
                    </h3>
                </div>
            </div>
            <div className="flex flex-col gap-16">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        heading={project.heading}
                        subHeading={project.subHeading}
                        image={project.image}
                        url={project.url}
                        year={project.year}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
