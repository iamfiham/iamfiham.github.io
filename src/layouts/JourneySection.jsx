import React from "react";
import SplitedHeading from "../components/SplitedHeading";
import { motion } from "framer-motion";

function JourneySection() {
    return (
        <div>
            <motion.h5
                initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0, margin: "0% 0% -10% 0%" }}
                className="mb-5 w-fit origin-left text-xs/none tracking-[0.25em] text-neutral-400"
            >
                MY JOURNEY
            </motion.h5>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_4fr] md:gap-16">
                <SplitedHeading>
                    I am a forward-thinking web developer dedicated to crafting exceptional digital solutions for your
                    needs.
                </SplitedHeading>
                <p className="col-start-auto row-start-auto text-lg text-neutral-400 md:col-start-2 md:row-start-2">
                    As a specialist in web development, I leverage my expertise and innovative approach to every project
                    I undertake. Showcasing a deep understanding of the intricate relationship between functionality and
                    user experience, I address each challenge with a holistic mindset, ensuring that every aspect of my
                    development is not only aesthetically pleasing but also performs seamlessly.
                </p>
            </div>
        </div>
    );
}

export default JourneySection;
