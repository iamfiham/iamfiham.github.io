import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import useData from "../hooks/useData";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
    const { socialMedia } = useData();
    const socialMediaContainerRef = useRef(null);
    const contactSectionRef = useRef(null);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: socialMediaContainerRef.current,
                start: "0% 100%",
                end: "100% 0%",
                scrub: false,
            },
        });
        tl.fromTo(
            socialMediaContainerRef.current.children,
            {
                clipPath: "inset(0% 0% 100% 0% round 0px)",
                autoAlpha: 0,
                yPercent: 100,
            },
            {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                autoAlpha: 1,
                yPercent: 0,
                stagger: 0.3,
                duration: 1.25,
                ease: "power3.inOut",
            },
        );
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: contactSectionRef.current,
                start: "0% 100%",
                end: "100% 0%",
                scrub: false,
            },
        });
        tl2.fromTo(
            contactSectionRef.current.children,
            {
                clipPath: "inset(0% 0% 100% 0% round 0px)",
                autoAlpha: 0,
                yPercent: 100,
            },
            {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                yPercent: 0,
                autoAlpha: 1,
                stagger: 0.3,
                duration: 1.25,
                ease: "power3.inOut",
            },
        );
    });

    return (
        <footer className="pb-4">
            <div className="mb-12 mt-16 flex flex-col justify-between gap-8 sm:flex-row">
                <ul className="flex flex-col items-start gap-2" ref={socialMediaContainerRef}>
                    {socialMedia.map((social, index) => (
                        <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <li className="group flex cursor-pointer items-center gap-1 font-opensans text-base/none font-semibold text-neutral-200 transition-all duration-300 hover:opacity-80">
                                {social.website}
                                <GoArrowRight className="-rotate-45 fill-blue-300 transition-all duration-300 group-hover:rotate-0" />
                            </li>
                        </a>
                    ))}
                </ul>
                <section className="flex flex-col" ref={contactSectionRef}>
                    <h3 className="mb-2 font-opensans text-lg font-semibold tracking-tight text-neutral-200">
                        Let's build something together.
                    </h3>
                    <a href="mailto:xyzfiham@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="group relative font-opensans text-base font-medium tracking-tight text-neutral-400">
                            xyzfiham@gmail.com
                            <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-neutral-500 transition-all duration-500 group-hover:w-full" />
                        </p>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <p className="group relative font-opensans text-base font-medium tracking-tight text-neutral-400">
                            Resume
                            <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-neutral-500 transition-all duration-500 group-hover:w-full" />
                        </p>
                    </a>
                </section>
            </div>
            <p className="text-center font-opensans text-sm/tight text-neutral-500">
                © 2024 All Rights Reserved by <br />
                <span className="font-medium text-neutral-300">Mohamed Fiham.</span>
            </p>
        </footer>
    );
}

export default Footer;
