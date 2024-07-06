import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCard({ heading, subHeading, video, url, year }) {
    const card = useRef(null);
    const videoRef = useRef(null);

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(() => {
        const videoElement = videoRef.current;
        let isPlaying = false;
        const playVideo = () => {
            if (videoElement && !isPlaying) {
                videoElement
                    .play()
                    .then(() => {
                        isPlaying = true;
                    })
                    .catch((error) => {
                        console.error("Error playing video:", error);
                    });
            }
        };
        const pauseVideo = () => {
            if (videoElement && isPlaying) {
                videoElement.pause();
                isPlaying = false;
            }
        };
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: card.current,
                start: "0% 80%",
                end: "100% 10%",
                // scrub: 1,
                scrub: false,
                // markers: true,
                toggleActions: "play reverse play reverse",
                onEnter: playVideo,
                onLeave: pauseVideo,
                onLeaveBack: pauseVideo,
                onEnterBack: playVideo,
            },
        });

        tl.from(card.current, {
            autoAlpha: 0,
            duration: 0.7,
        });
    });
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
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
        </a>
    );
}

export default ProjectCard;
