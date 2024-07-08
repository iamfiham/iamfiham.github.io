import { GoArrowRight } from "react-icons/go";
import logo from "../assets/logo-white.svg";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function NavBar() {
    const navBarRef = useRef(null);

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.fromTo(
            navBarRef.current,
            {
                // clipPath: "circle(0% at 50% 50%)",
                autoAlpha: 0,
                yPercent: -100,
            },
            {
                // clipPath: "circle(100% at 50% 50%)",
                yPercent: 0,
                duration: 2,
                ease: "power3.out",
                autoAlpha: 1,
                delay: 2,
            },
        );
    });

    return (
        <div className="flex items-center gap-3 px-0 py-4 sm:px-4" ref={navBarRef}>
            <img src={logo} alt="" className="w-[14px]" />
            <h2 className="mr-auto font-opensans text-base/none font-semibold tracking-tight text-neutral-200">
                {" "}
                Mohamed Fiham
            </h2>
            <ul className="hidden gap-8 text-sm/none text-neutral-300 sm:flex">
                <a href="mailto:xyzfiham@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li className="group flex cursor-pointer items-center gap-1 font-medium transition-all duration-300 hover:opacity-70">
                        Email <GoArrowRight className="-rotate-45 transition-all duration-300 group-hover:rotate-0" />
                    </li>
                </a>
                <li className="group flex cursor-pointer items-center gap-1 font-medium transition-all duration-300 hover:opacity-70">
                    Read.cv <GoArrowRight className="-rotate-45 transition-all duration-300 group-hover:rotate-0" />
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
