import React, { useEffect, useRef, useState } from "react";
import styles from "./InCallFeature.module.css";
import TitleBar from "../../TitleBar/TitleBar";

const InCallFeature = () => {
    const sections = [
        { 
            title: "24×7 Availability", 
            desc: "After-hours availability, policies & schedules.", 
            img: "/Svg/Funnel01.svg",
            textWidth: "70%",
            leftOffset: "10%"
        },
        { 
            title: "Concurrent Calls", 
            desc: "Parallel Call Answering and management", 
            img: "/Svg/Funnel02.svg",
            textWidth: "65%",
            leftOffset: "15%"
        },
        { 
            title: "Multilingual Switching", 
            desc: "In-call switching to user preferred language", 
            img: "/Svg/Funnel03.svg",
            textWidth: "60%",
            leftOffset: "20%"
        },
        { 
            title: "Smart Call Routing", 
            desc: "Warm call Transfers or Bookings", 
            img: "/Svg/Funnel04.svg",
            textWidth: "55%",
            leftOffset: "25%"
        },
    ];

    const containerRef = useRef(null);
    const [sectionTops, setSectionTops] = useState(Array(sections.length).fill(100));
    const [releasedSections, setReleasedSections] = useState(Array(sections.length).fill(false));

    // 🧩 Adjusted to move funnels downward
    const gap = 15;      // gap between funnels
    const startTop = 35; // was 25 earlier → increased to move lower
    const targetTops = sections.map((_, i) => startTop + i * gap);

useEffect(() => {
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollY = -rect.top;
        const containerHeight = rect.height - window.innerHeight;

        const newTops = [...sectionTops];
        const newReleased = [...releasedSections];
        const lockPoint = containerHeight * 0.8; // 80% scroll = all funnels locked

        sections.forEach((_, i) => {
            const sectionStart = (i * lockPoint) / sections.length;
            const sectionEnd = ((i + 1) * lockPoint) / sections.length;

            let progress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
            progress = Math.min(Math.max(progress, 0), 1);

            const newTop = 100 - (100 - targetTops[i]) * progress;
            newTops[i] = newTop;

            if (progress >= 1 && !newReleased[i]) newReleased[i] = true;
            else if (progress < 1 && newReleased[i]) newReleased[i] = false;
        });

        setSectionTops(newTops);
        setReleasedSections(newReleased);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
                            className={`${styles.section} ${releasedSections[i] ? styles.released : ""}`}
                            style={{
                                zIndex: sections.length - i,
                                top: `${sectionTops[i]}%`,
                                opacity: sectionTops[i] < 100 ? 1 : 0,
                                transform: `translateY(${sectionTops[i] < 100 ? 0 : 30}px) scale(${sectionTops[i] < 100 ? 1 : 0.95})`,
                                transition: "top 0.6s ease-out, transform 0.6s ease-out, opacity 0.4s ease",
                            }}
                        >
                            <div 
                                className={styles.text}
                                style={{ 
                                    width: sec.textWidth, 
                                    left: sec.leftOffset
                                }}
                            >
                                <h2>{sec.title}</h2>
                                <p>{sec.desc}</p>
                            </div>

                            <div className={styles.FunnelShape}>
                                <img src={sec.img} className={styles[`funnelImg${i + 1}`]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InCallFeature;
