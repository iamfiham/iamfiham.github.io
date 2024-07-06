import React, { useRef } from "react";
import video from "../assets/projects/video.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCard({ heading, subHeading, image, url, year }) {
    const card = useRef(null);
    const videoRef = useRef(null);

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: card.current,
                start: "0% 80%",
                end: "100% 10%",
                // scrub: 1,
                scrub: false,
                // markers: true,
                toggleActions: "play reverse play reverse",
                onEnter: () => videoRef.current.play(),
                onLeave: () => videoRef.current.pause(),
                onLeaveBack: () => videoRef.current.pause(),
                onEnterBack: () => videoRef.current.play(),
            },
        });

        tl.from(card.current, {
            autoAlpha: 0,
            duration: 0.7,
        });
    });
    return (
        <div ref={card} className="origin-top">
            <p className="mb-2 text-sm/none tracking-tight text-neutral-500">{year}</p>
            <h4 className="mb-[0.625rem] text-2xl/snug font-medium tracking-tighter text-neutral-200">{heading}</h4>
            <p className="mb-6 text-base/normal tracking-tight text-neutral-400">{subHeading}</p>
            <div className="overflow-hidden rounded border border-solid border-white/5">
                <video muted loop controls={false} className="w-full object-contain" ref={videoRef}>
                    <source src={video} />
                </video>
            </div>
        </div>
    );
}

export default ProjectCard;
