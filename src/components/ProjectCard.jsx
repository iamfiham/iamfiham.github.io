import React, { useRef } from "react";
import { IoIosLink } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCard({ heading, subHeading, video, url, year, type }) {
    const card = useRef(null);
    const videoRef = useRef(null);
    const videoCaptionRef = useRef(null);

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
        let videoTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
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

        let videoCaptionTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: videoCaptionRef.current,
                start: "0% 90%",
                end: "100% 10%",
                scrub: false,
                toggleActions: "play reverse play reverse",
            },
        });

        videoTimeLine.fromTo(
            videoRef.current,

            {
                clipPath: "inset(0% 70% 0% 30% round 8px)",
                autoAlpha: 0,
                xPercent: -30,
            },
            {
                clipPath: "inset(0% 0% 0% 0% round 8px)",
                autoAlpha: 1,
                xPercent: 0,

                duration: 1.5,
                ease: "power3.inOut",
            },
        );

        videoCaptionTimeLine.fromTo(
            videoCaptionRef.current.children,
            {
                autoAlpha: 0,
                xPercent: -30,
            },
            {
                autoAlpha: 1,
                duration: 0.75,
                xPercent: 0,
            },
            0,
        );
    });
    return (
        <article ref={card} className="relative overflow-hidden">
            <figure className="mb-6 aspect-video w-full overflow-hidden rounded-lg">
                <video
                    muted
                    loop
                    controls={false}
                    className="pointer-events-none relative aspect-video w-full object-cover"
                    ref={videoRef}
                >
                    <source src={video} />
                </video>
            </figure>
            <figcaption className="grid w-full grid-cols-[3fr_1fr] gap-4" ref={videoCaptionRef}>
                <div>
                    <h3 className="mb-3 text-base/snug font-medium text-neutral-200">{heading}</h3>
                    <p className="max-w-[400px] text-sm/snug text-neutral-400">{subHeading}</p>
                </div>
                <div className="flex flex-col items-end">
                    <li className="mb-1 text-xs/none text-neutral-400">Year</li>
                    <time datetime={year} className="mb-3 text-sm/snug font-medium text-neutral-200">
                        {year}
                    </time>
                    <li className="mb-1 text-xs/none text-neutral-400">Type</li>
                    <li className="mb-3 text-right text-sm/snug font-medium text-neutral-200">{type}</li>
                    <li className="mb-1 text-xs/none text-neutral-400">Link</li>

                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link cursor-pointer justify-self-end"
                    >
                        <button className="relative flex items-center gap-2 py-1 text-sm/none font-medium tracking-tight text-neutral-200">
                            <span className="absolute bottom-0 left-0 -z-10 block h-[10px] w-0 rounded bg-white/20 transition-all duration-500 group-hover/link:w-full" />
                            <IoIosLink className="text-neutral-400" />
                            Visit Site
                        </button>
                    </a>
                </div>
            </figcaption>
        </article>
    );
}

export default ProjectCard;
