import React from "react";
import { GoArrowRight } from "react-icons/go";
import useData from "../hooks/useData";

function Footer() {
    const { socialMedia } = useData();
    return (
        <div className="pb-8 pt-16">
            <div className="mb-16 flex flex-col justify-between gap-8 sm:flex-row">
                <div className="flex flex-col items-start gap-2">
                    {socialMedia.map((social, index) => (
                        <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <button className="group flex cursor-pointer items-center gap-1 font-opensans text-base/none font-semibold text-neutral-200 transition-all duration-300 hover:opacity-80">
                                {social.website}
                                <GoArrowRight className="-rotate-45 fill-blue-300 transition-all duration-300 group-hover:rotate-0" />
                            </button>
                        </a>
                    ))}
                </div>
                <div>
                    <h3 className="font-opensans text-lg font-semibold tracking-tight text-neutral-200">Let's build something together.</h3>
                    <a href="mailto:xyzfiham@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="group relative font-opensans text-base font-medium tracking-tight text-neutral-400">
                            xyzfiham@gmail.com
                            <span className="absolute -bottom-1 left-0 block h-[2px] w-0 bg-neutral-500 transition-all duration-500 group-hover:w-full" />
                        </button>
                    </a>
                </div>
            </div>
            <h5 className="text-center font-opensans text-sm/none font-medium text-neutral-500">© 2024 All Rights Reserved by Mohamed Fiham.</h5>
        </div>
    );
}

export default Footer;