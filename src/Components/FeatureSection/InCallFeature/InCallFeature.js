import React, { useEffect, useRef, useState } from "react";
import styles from "./InCallFeature.module.css";
import TitleBar from "../../TitleBar/TitleBar";

const InCallFeature = () => {
    const sections = [
        { title: "24×7 Availability", desc: "After-hours availability, policies & schedules.", img: "/Svg/Funnel01.svg" },
        { title: "Concurrent Calls", desc: "Parallel Call Answering and management", img: "/Svg/Funnel02.svg" },
        { title: "Multilingual Switching", desc: "In-call switching to user preferred language", img: "/Svg/Funnel03.svg" },
        { title: "Smart Call Routing", desc: "Warm call Transfers or Bookings", img: "/Svg/Funnel04.svg" },
    ];

    const containerRef = useRef(null);
    const [sectionTops, setSectionTops] = useState([100, 100, 100, 100]); // initial bottom

    const targetTops = [25, 40, 55, 65]; // target top positions in %

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollY = -rect.top; // amount scrolled inside container
            const containerHeight = rect.height - window.innerHeight;

            const newTops = sections.map((_, i) => {
                const sectionStart = (i * containerHeight) / sections.length;
                const sectionEnd = ((i + 1) * containerHeight) / sections.length;
                let progress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
                progress = Math.min(Math.max(progress, 0), 1); // clamp 0-1
                return 100 - (100 - targetTops[i]) * progress; // move from 100% → targetTop%
            });

            setSectionTops(newTops);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections.length]);

    return (
        <div className={styles.containerBox}>
            <div className={styles.TitleSection}>
                <TitleBar subTitle="Additional " spanText="Features" title="In-Call Features" />
            </div>

            <div className={styles.scrollContainer} ref={containerRef}>
                <div className={styles.stickyWrapper}>
                    {sections.map((sec, i) => (
                        <div
                            key={i}
                            className={styles.section}
                            style={{
                                zIndex: sections.length - i,
                                top: `${sectionTops[i]}%`,
                                opacity: sectionTops[i] < 100 ? 1 : 0,
                                transform: `translateY(${sectionTops[i] < 100 ? 0 : 50}px) scale(${sectionTops[i] < 100 ? 1 : 0.9})`,
                            }}
                        >
                            <div className={styles.text}>
                                <h2>{sec.title}</h2>
                                <p>{sec.desc}</p>
                            </div>
                           <div className={styles.FunnelShape}>
  <img src={sec.img} className={styles[`funnelImg${i+1}`]} />
</div>
                            {/* <div className={`${styles.funnel} ${styles[`funnel${i + 1}`]}`}>
                                
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InCallFeature;
