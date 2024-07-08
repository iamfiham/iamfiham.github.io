import React from "react";
import firebase from "../assets/skills/firebase.svg";
import reactIcon from "../assets/skills/react-icon.svg";
import tailwind from "../assets/skills/tailwind.svg";

function SkillSection() {
    const skillsData = [
        {
            icon: firebase,
            name: "Firebase",
            caption: "Backend cloud computing services and application development platforms provided by Google.",
        },
        {
            icon: reactIcon,
            name: "React",
            caption: "JavaScript library for building user interfaces based on components by Facebook Inc.",
        },
        {
            icon: tailwind,
            name: "Tailwind CSS",
            caption: "Utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_2fr]">
            <div className="flex flex-col gap-4">
                {skillsData.map((data) => (
                    <div className="flex items-center gap-4 rounded-md border border-solid border-white/5 bg-white/[0.05] p-2 pr-4">
                        <span className="rounded bg-white/[0.05] p-4">
                            <img src={data.icon} alt="" className="w-12" />
                        </span>
                        <span>
                            <h4 className="mb-2 text-xl/none font-medium tracking-tight text-neutral-100">{data.name}</h4>
                            <p className="max-w-[400px] text-base/[1.25] text-neutral-400">{data.caption}</p>
                        </span>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <h2 className="mb-6 text-3xl/none font-medium tracking-tighter text-neutral-200">Technological Proficiencies and Expertise</h2>
                <h3 className="max-w-[450px] text-base/snug tracking-tight text-neutral-400">
                    Proficient in utilizing advanced tools and technologies to deliver exceptional and functional web applications.
                </h3>
            </div>
        </div>
    );
}

export default SkillSection;
