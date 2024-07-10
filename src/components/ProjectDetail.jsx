import React, { useRef } from "react";
import image from "../assets/image.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectDetail() {
    const target = useRef(null);
    const element = useRef(null);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        const calculation = () => {
            const elementRectHeight = element.current.getBoundingClientRect().height;
            const targetRectHeight = target.current.getBoundingClientRect().height;
            const final = targetRectHeight - elementRectHeight;
            return `${final} 130px`;
        };

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: target.current,
                start: "0% 130px",
                end: calculation(),
                scrub: 1,
                // scrub: false,
                // markers: true,
                pin: element.current,
                // toggleActions: "play reverse play reverse",
            },
        });
    });

    return (
        <div>
            <div className="mb-10 flex items-center gap-3">
                <span className="inline-block aspect-square w-[10px] rounded-full bg-neutral-200 shadow-glow"></span>
                <p className="text-[11px] font-semibold tracking-wide text-neutral-500">VISUAL DESIGN DIRECTION</p>
            </div>
            <h2 className="text-glow mb-20 text-4xl font-medium tracking-tight">
                Unmistakeably Stadia, undeniably Google.
            </h2>

            <div className="mb-20 grid grid-cols-2 items-start gap-16">
                <h3 className="text-2xl font-medium tracking-tight" ref={element}>
                    Combining the old and new.
                </h3>
                <p className="text-base text-neutral-400" ref={target}>
                    At Google’s scale of design, it would be redundant to create an entirely new design system for this
                    project. <br /> <br />
                    Instead, custom components were designed on a per-need basis, and
                    <span className="text-glow font-medium text-neutral-300">
                        {" "}
                        maximized the use of atomic Material Design elements and characteristics.
                    </span>
                    <br /> <br />
                    Though, there was room for some fun! In the spirit of being forward-looking while also paying homage
                    to the past, I fused together aspects of Material Design with Stadia’s design system (Figure 6.0).
                </p>
            </div>
            <img
                src={image}
                alt="image"
                className="mx-auto w-full max-w-[750px] rounded-xl border border-solid border-neutral-800 object-cover"
            />
        </div>
    );
}

export default ProjectDetail;
