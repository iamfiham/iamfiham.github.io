import road from "../assets/road.jpg";
import desktop from "../assets/desktop.jpg";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function Home() {
    const homeImageRef = useRef(null);
    const homeImageTextRef = useRef(null);
    const homeSectionRef = useRef(null);
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
                clipPath: " inset(20% 50% 100% 50% round 8px)",
            },
            {
                // clipPath: "inset(0% 0% 0% 0% round 8px)",
                clipPath: "inset(0% 20% 40% 20% round 8px)",
                duration: 3,
                ease: "power4.inOut",
                delay: 0.5,
            },
        );

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: homeSectionRef.current,
                start: "0% 0%",
                end: "100% 70%",
                scrub: 1,
            },
        });
        tl.fromTo(
            homeImageRef.current,
            {
                yPercent: 0,
            },
            {
                yPercent: 35,
            },
            0,
        )
            .fromTo(
                imageContainerRef.current,
                {
                    clipPath: "inset(0% 20% 40% 20% round 8px)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0% round 8px)",
                },
                0,
            )
            .fromTo(
                homeImageTextRef.current,
                {
                    height: "60%",
                },
                {
                    height: "100%",
                },
                0,
            );
    });

    const titleAnimationVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0,
                delay: 1,
            },
        },
        hidden: {
            opacity: 0,
            transition: { when: "afterChildren" },
        },
    };
    const splitedWordVariants = {
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
        <main className="flex flex-col" ref={homeSectionRef}>
            <NavBar />
            <div className="h-16 sm:h-20 md:h-28" />
            <section className="grid grid-cols-1 justify-items-center gap-12">
                {headingContentArray.length > 0 && (
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={titleAnimationVariants}
                        className="row-gap column-gap flex max-w-[600px] flex-wrap self-start md:self-center"
                        ref={headingRef}
                    >
                        {headingContentArray.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={splitedWordVariants}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                                className="negative-margin inline-block text-3xl/[1.2] font-medium tracking-tighter text-neutral-200"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                )}
                <figure
                    className="group relative aspect-square w-full max-w-[1280px] overflow-hidden rounded-lg sm:aspect-video"
                    ref={imageContainerRef}
                >
                    <img
                        src={desktop}
                        alt="Home Image"
                        className="absolute bottom-0 left-0 h-[160%] w-full object-cover object-center"
                        ref={homeImageRef}
                    />
                    <figcaption className="absolute left-0 top-0 z-20 grid h-full w-full justify-center bg-gradient-to-b from-black/50 to-black/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <span ref={homeImageTextRef} className="flex h-full flex-col justify-center">
                            <p className="mb-2 text-sm/none text-neutral-400">Freelancer</p>
                            <h3 className="text-base/none font-medium">2021 - Present Day</h3>
                        </span>
                    </figcaption>
                </figure>
            </section>
        </main>
    );
}

export default Home;
