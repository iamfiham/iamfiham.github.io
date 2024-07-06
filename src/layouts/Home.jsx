import road from "../assets/road.jpg";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar";

function Home() {
    const element = useRef(null);
    const target = useRef(null);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        const calculation = () => {
            const headingTextHeight = headingText.current.getBoundingClientRect().height;
            return headingTextHeight;
        };
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: target.current,
                start: "0% 0%",
                end: "100% 0%",
                scrub: 1,
                // scrub: false,
                // markers: true,
                // toggleActions: "play reverse play reverse",
            },
        });
        tl.to(element.current, {
            // scale: 2,
            yPercent: 20,
        });
    });

    return (
        <div className="flex min-h-dvh flex-col" ref={target}>
            <NavBar />
            <div className="flex w-[min(100%,_1024px)] flex-1 grid-cols-1 flex-col items-center gap-12 self-center py-8 md:grid md:grid-cols-2">
                <div className="group relative h-full w-full flex-1 overflow-hidden rounded-lg">
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
                <h2 className="self-start text-3xl/[1.1] font-medium tracking-tighter text-neutral-200 md:self-center">
                    I'm a Mohamed Fiham — based frontend developer. I specialise in crafting seamless and interactive web experiences with talented
                    collaborators.
                </h2>
            </div>
        </div>
    );
}

export default Home;
