import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTouchDevice from "../hooks/useTouchDevice";

function ProjectCard({ heading, subHeading, video, url, year }) {
    const card = useRef(null);
    const videoRef = useRef(null);
    const { isTouchDevice } = useTouchDevice();

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
                scrub: false,
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
            xPercent: -5,
        });
    });
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="group">
            <div ref={card} className="relative origin-top overflow-hidden rounded-md">
                <div
                    className={`absolute left-0 right-0 flex h-full w-full flex-col p-4 transition-all duration-300 sm:p-8 ${isTouchDevice ? "bg-transparent opacity-100" : "bg-gradient-to-t from-black/80 via-black/60 to-black/30 opacity-0 group-hover:opacity-100"}`}
                >
                    <p className="mb-2 mt-auto text-sm/none text-neutral-400">{year}</p>
                    <h4 className="mb-2 text-xl/snug font-medium tracking-tighter text-neutral-200">{heading}</h4>
                    <p className="max-w-[500px] text-base/snug text-neutral-400">{subHeading}</p>
                </div>
                <div className="aspect-square overflow-hidden sm:aspect-video">
                    <video muted loop controls={false} className="h-full w-full object-cover" ref={videoRef}>
                        <source src={video} />
                    </video>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
