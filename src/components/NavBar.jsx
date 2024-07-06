import React from "react";

function NavBar() {
    return (
        <div className="flex items-center justify-between border-0 border-b border-solid border-white/10 px-0 py-4 sm:px-4">
            <h2 className="font-opensans text-base/none font-semibold tracking-tight text-neutral-200"> Mohamed Fiham</h2>
            <ul className="text-sm/none text-neutral-300">
                <li className="font-medium">Read.cv</li>
            </ul>
        </div>
    );
}

export default NavBar;
