import robot from "../assets/robot.jpg";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MinimalDesign() {
    const target = useRef(null);
    const element = useRef(null);
    const headingText = useRef(null);

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
                end: "30% 0%",
                scrub: 1,
                // scrub: false,
                markers: true,
                // toggleActions: "play reverse play reverse",
            },
        });
        tl.to(element.current, {
            // scale: 2,
            borderRadius: 12,
            yPercent: 100,
        });
    });
    return (
        <div className="grid min-h-screen pt-8" ref={target}>
            <div className="grid grid-cols-2 items-start">
                <div></div>
                <h2 className="text-5xl tracking-tighter">Nothing</h2>
            </div>
            <div className="grid grid-cols-2 items-start self-end">
                <h2 className="max-w-[460px] text-3xl tracking-tighter" ref={headingText}>
                    Hi! We are creative design studio with a clear focus on motion design, illustrations and graphic design.
                </h2>
                <img src={robot} alt="" className="aspect-[7/2] origin-bottom-right object-cover" ref={element} />
            </div>
        </div>
    );
}

export default MinimalDesign;
