import road from "../assets/road.jpg";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function Home() {
    const element = useRef(null);
    const target = useRef(null);
    const imageContainerRef = useRef(null);
    const headingRef = useRef(null);
    const [headingContentArray, setHeadingContentArray] = useState([]);
    const headingContent =
        "I'm a Mohamed Fiham — based frontend developer. I specialise in crafting seamless and interactive web experiences with talented collaborators.";

    useLayoutEffect(() => {
        const trimmedContent = headingContent.trim();
        const words = trimmedContent.split(" ");
        setHeadingContentArray(words);
    }, []);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        gsap.fromTo(
            imageContainerRef.current,
            {
                clipPath: " inset(50% 50% 50% 50% round 8px)",
            },
            {
                clipPath: "inset(0% 0% 0% 0% round 8px)",
                duration: 3,
                ease: "power4.inOut",
                delay: 0.75,
            },
        );
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: target.current,
                start: "0% 0%",
                end: "100% 0%",
                scrub: 1,
            },
        });
        tl.to(element.current, {
            yPercent: 20,
        });
    });

    const animation = {
        visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0, delay: 1.5 },
        },
        hidden: {
            opacity: 0,
            transition: { when: "afterChildren" },
        },
    };
    const noteCardVariants = {
        visible: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: "0%",
        },
        hidden: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            y: "100%",
        },
    };

    return (
        <div className="flex min-h-svh flex-col" ref={target}>
            <NavBar />
            <div className="flex w-[min(100%,_1024px)] flex-1 grid-cols-1 flex-col items-center gap-12 self-center py-8 md:grid md:grid-cols-2">
                <div className="group relative h-full w-full flex-1 overflow-hidden rounded-lg" ref={imageContainerRef}>
                    <img
                        src={road}
                        alt="Home Image"
                        className="absolute bottom-0 left-0 z-10 h-[125%] w-full scale-110 rounded-lg object-cover"
                        ref={element}
                    />
                    <div className="absolute left-0 top-0 z-20 grid h-full w-full place-items-center bg-gradient-to-b from-black/50 to-black/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div>
                            <p className="mb-2 text-sm/none text-neutral-400">Freelancer</p>
                            <h3 className="text-base/none font-medium">2021 - Present Day</h3>
                        </div>
                    </div>
                </div>
                {headingContentArray.length > 0 && (
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={animation}
                        className="row-gap column-gap flex flex-wrap self-start md:self-center"
                        ref={headingRef}
                    >
                        {headingContentArray.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={noteCardVariants}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                                className="negative-margin inline-block text-3xl/[1.2] font-medium tracking-tighter text-neutral-200"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                )}
            </div>
        </div>
    );
}

export default Home;
