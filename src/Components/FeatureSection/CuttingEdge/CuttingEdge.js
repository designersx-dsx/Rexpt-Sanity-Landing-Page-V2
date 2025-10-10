import React, { useRef, useState } from "react";
import styles from "./CuttingEdge.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CuttingEdge = () => {
    const scrollRef = useRef(null);
    const [scrollIndex, setScrollIndex] = useState(0);

    const cards = [
        { icon: "/Svg/characterization-icon.svg", title: "Agent Characterization", bg: "#F1E7FC" },
        { icon: "/Svg/characterization-icon.svg", title: "Email Notifications", bg: "#FDE8EB" },
        { icon: "/Svg/characterization-icon.svg", title: "Speech Naturalization", bg: "#E2F0FF" },
        { icon: "/Svg/characterization-icon.svg", title: "Environment Setup", bg: "#FFEFE2" },
        { icon: "/Svg/calendar-icon.svg", title: "Book Calendar Meetings", bg: "#E5F6E1" },
        { icon: "/Svg/characterization-icon.svg", title: "Voice Personalization", bg: "#FBEAFF" },
        { icon: "/Svg/characterization-icon.svg", title: "AI Chat Integration", bg: "#E5F6E1" },
         { icon: "/Svg/characterization-icon.svg", title: "Agent Characterization", bg: "#F1E7FC" }
    ];

    const cardsPerView = 5;
    const totalScrolls = Math.ceil(cards.length / cardsPerView) - 1;

    const handleScroll = (dir) => {
        const container = scrollRef.current;
        if (!container) return;

        const width = container.offsetWidth;
        let newIndex = scrollIndex + (dir === "right" ? 1 : -1);

        if (newIndex < 0) newIndex = 0;
        if (newIndex > totalScrolls) newIndex = totalScrolls;

        container.scrollTo({
            left: newIndex * width,
            behavior: "smooth",
        });

        setScrollIndex(newIndex);
    };

    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <p>
                    Cutting-Edge <span>Features</span>
                </p>
                <h2>Powered by Our AI Receptionist</h2>
            </div>

            <div className={styles.sliderWrapper}>
                <button
                    className={`${styles.arrowBtn} ${styles.left}`}
                    onClick={() => handleScroll("left")}
                    disabled={scrollIndex === 0}
                >
                    <FaChevronLeft />
                </button>

                <div className={styles.slider} ref={scrollRef}>
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={styles.card}
                            style={{ backgroundColor: card.bg }}
                        >
                            <img src={card.icon} alt={card.title} className={styles.icon} />
                            <h3>{card.title}</h3>
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.arrowBtn} ${styles.right}`}
                    onClick={() => handleScroll("right")}
                    disabled={scrollIndex === totalScrolls}
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default CuttingEdge;
