import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTouchDevice from "../hooks/useTouchDevice";
import { PiHandTap } from "react-icons/pi";

function ProjectCard({ heading, subHeading, video, url, year, type }) {
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
        <div ref={card} className="group relative aspect-square origin-top overflow-hidden rounded-lg sm:aspect-video">
            <div
                className={`absolute left-0 right-0 z-20 flex h-full w-full flex-col p-4 transition-all duration-500 sm:p-8 ${isTouchDevice ? "bg-black/85 opacity-100" : "bg-black/80 opacity-0 group-hover:opacity-100"}`}
            >
                <div className="mb-auto grid grid-cols-[3fr_1fr] gap-4">
                    <div>
                        <h3 className="mb-4 text-base/snug font-medium text-neutral-200">{heading}</h3>
                        <p className="mb-4 max-w-[500px] text-sm/snug text-neutral-400">{subHeading}</p>
                    </div>
                    <div>
                        <ul className="mb-4 flex flex-col items-end">
                            <li className="mb-1 text-xs/none text-neutral-400">Year</li>
                            <li className="text-sm/snug font-medium text-neutral-200">{year}</li>
                        </ul>
                        <ul className="flex flex-col items-end">
                            <li className="mb-1 text-xs/none text-neutral-400">Type</li>
                            <li className="text-sm/snug font-medium text-neutral-200">{type}</li>
                        </ul>
                    </div>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="group/link cursor-pointer">
                    <button className="relative self-start font-opensans text-sm/snug font-medium tracking-tight text-neutral-400">
                        {url}
                        <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-neutral-500 transition-all duration-500 group-hover/link:w-full" />
                    </button>
                </a>
            </div>
            <video muted loop controls={false} className="relative z-10 h-full w-full object-cover" ref={videoRef}>
                <source src={video} />
            </video>
        </div>
    );
}

export default ProjectCard;
