import React, { useRef, useState } from "react";
import SplitedHeading from "../components/SplitedHeading";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function JourneySection() {
    const sectionCaption = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const [isSplited, setIsSplited] = useState(false);

    useGSAP(() => {
        if (!isSplited) {
            return;
        }
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionCaption.current,
                start: "0% 90%",
                end: "100% 10%",
                scrub: false,
                toggleActions: "play reverse play reverse",
            },
        });
        tl.fromTo(
            sectionCaption.current,
            {
                clipPath: "inset(0% 100% 0% 30% round 0px)",
                autoAlpha: 0,
                xPercent: -20,
            },
            {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                xPercent: 0,
                autoAlpha: 1,
                duration: 2.5,
                ease: "power4.inOut",
            },
        );
    }, [isSplited]);
    return (
        <article>
            <motion.h5
                initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0, margin: "0% 0% -10% 0%" }}
                className="mb-5 w-fit origin-left text-xs/none tracking-[0.25em] text-neutral-400"
            >
                MY JOURNEY
            </motion.h5>
            <section className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_4fr] md:gap-16">
                <SplitedHeading setIsSplited={setIsSplited}>
                    I am a forward-thinking web developer dedicated to crafting exceptional digital solutions for your
                    needs.
                </SplitedHeading>
                <p
                    className="col-start-auto row-start-auto text-lg text-neutral-400 md:col-start-2 md:row-start-2"
                    ref={sectionCaption}
                >
                    As a specialist in web development, I leverage my expertise and innovative approach to every project
                    I undertake. Showcasing a deep understanding of the intricate relationship between functionality and
                    user experience, I address each challenge with a holistic mindset, ensuring that every aspect of my
                    development is not only aesthetically pleasing but also performs seamlessly.
                </p>
            </section>
        </article>
    );
}

export default JourneySection;
