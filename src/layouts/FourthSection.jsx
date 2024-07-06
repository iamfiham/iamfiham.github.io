import React from "react";
import laptop from "../assets/laptop.png";
import keyboard from "../assets/keyboard.png";
import pc from "../assets/pc.png";
import iphone from "../assets/iphone.png";
import mouse from "../assets/mouse.png";

function FourthSection() {
    return (
        <div className="mx-auto grid auto-rows-fr grid-cols-3 gap-6">
            <div className="flex flex-col justify-between gap-12 bg-neutral-50 p-10">
                <img src={laptop} alt="" className="mx-auto aspect-square max-h-56 object-contain" />
                <div>
                    <h3 className="mb-4 text-xl/tight font-medium tracking-tight text-neutral-900">
                        Apple MacBook Pro 15' Retina Display 2.2GHz Core i7 16GB
                    </h3>
                    <p className="text-base/none font-medium text-neutral-400">$1315.00</p>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-12 bg-neutral-50 p-10">
                <img src={keyboard} alt="" className="mx-auto aspect-square max-h-56 object-contain" />

                <div>
                    <h3 className="mb-4 text-xl/tight font-medium tracking-tight text-neutral-900">
                        Magic Keyboard for iPad Pro 13‑inch (M4) - US English - White
                    </h3>
                    <p className="text-base/none font-medium text-neutral-400">$349.00</p>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-12 bg-neutral-50 p-10">
                <img src={pc} alt="" className="mx-auto aspect-square max-h-56 object-contain" />
                <div>
                    <h3 className="mb-4 text-xl/tight font-medium tracking-tight text-neutral-900">PowerEdge T550 Tower Server | Dell UK</h3>
                    <p className="text-base/none font-medium text-neutral-400">$1125.00</p>
                </div>
            </div>
            <div className="col-span-2 flex flex-col justify-between gap-12 bg-neutral-50 p-10">
                <img src={iphone} alt="" className="mx-auto aspect-square max-h-56 object-contain" />
                <div>
                    <h3 className="mb-4 text-xl/tight font-medium tracking-tight text-neutral-900">iPhone SE Retina Display</h3>
                    <p className="text-base/none font-medium text-neutral-400">$429.00</p>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-12 bg-neutral-50 p-10">
                <img src={mouse} alt="" className="mx-auto aspect-square max-h-56 object-contain" />
                <div>
                    <h3 className="mb-4 text-xl/tight font-medium tracking-tight text-neutral-900">Magic Mouse - White Multi-Touch Surface</h3>
                    <p className="text-base/none font-medium text-neutral-400">$79.00</p>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
