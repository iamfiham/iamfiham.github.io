import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useData from "../hooks/useData";
import SplitedHeading from "../components/SplitedHeading";
import { motion } from "framer-motion";

function ProjectSection() {
    const projectSectionRef = useRef(null);
    const heading = useRef(null);
    const { allProjects } = useData();

    const [isTextSplited, setIsTextSplited] = useState(false);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        const calculation = () => {
            const headingRectHeight = heading.current.getBoundingClientRect().height;
            return `100% ${headingRectHeight + 48}px`;
        };

        let responsiveGsap = gsap.matchMedia();
        responsiveGsap.add("(min-width:768px)", () => {
            if (!isTextSplited) {
                return;
            }
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectSectionRef.current,
                    start: "0% 48px",
                    end: calculation,
                    scrub: false,
                    // markers: true,
                    pin: heading.current,
                },
            });
        });
    }, [isTextSplited]);

    return (
        <article className="grid grid-cols-1 gap-8 md:grid-cols-[3fr_4fr] md:gap-16" ref={projectSectionRef}>
            <aside>
                <section ref={heading}>
                    <motion.h5
                        initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                        whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0, margin: "0% 0% -10% 0%" }}
                        className="mb-5 w-fit origin-left text-xs/none tracking-[0.25em] text-neutral-400"
                    >
                        SHOWCASE OF WORK
                    </motion.h5>
                    <SplitedHeading setIsTextSplited={setIsTextSplited}>
                        Each project reflects my commitment to transforming creative ideas into engaging, interactive
                        interfaces, delivering high-quality digital solutions.
                    </SplitedHeading>
                </section>
            </aside>
            <section className="flex flex-col gap-12">
                {allProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </section>
        </article>
    );
}

export default ProjectSection;
