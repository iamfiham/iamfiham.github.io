import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SplitedHeading({ children, setIsTextSplited }) {
    const headingRef = useRef(null);
    const [headingContentArray, setHeadingContentArray] = useState([]);
    const headingContent = children;

    useEffect(() => {
        if (!headingContent) {
            return;
        }
        const trimmedContent = headingContent.trim();
        const words = trimmedContent.split(" ");
        setHeadingContentArray(words);
        if (setIsTextSplited && typeof setIsTextSplited === "function") {
            setIsTextSplited(true);
        }
    }, [headingContent, setIsTextSplited]);

    const animation = {
        visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0 },
        },
        hidden: {
            opacity: 0,
            transition: { when: "afterChildren" },
        },
    };
    const noteCardVariants = {
        visible: {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        hidden: {
            opacity: 0,
            y: 50,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
    };
    return (
        headingContentArray.length > 0 && (
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "0% 0% -10% 0%" }}
                variants={animation}
                className="row-gap column-gap flex flex-wrap self-start md:self-center"
                ref={headingRef}
            >
                {headingContentArray.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={noteCardVariants}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className="negative-margin inline-block text-3xl/[1.2] font-medium tracking-tighter text-neutral-200"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h2>
        )
    );
}

export default SplitedHeading;
