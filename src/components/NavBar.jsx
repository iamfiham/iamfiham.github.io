import React from "react";
import { GoArrowRight } from "react-icons/go";
import logo from "../assets/logo-white.svg";

function NavBar() {
    return (
        <div className="flex items-center gap-3 border-0 border-b border-solid border-white/10 px-0 py-4 sm:px-4">
            <img src={logo} alt="" className="w-[14px]" />
            <h2 className="mr-auto font-opensans text-base/none font-semibold tracking-tight text-neutral-200"> Mohamed Fiham</h2>
            <ul className="flex gap-8 text-sm/none text-neutral-300">
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
