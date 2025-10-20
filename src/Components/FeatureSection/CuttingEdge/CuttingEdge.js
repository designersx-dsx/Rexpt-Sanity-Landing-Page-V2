import React, { useEffect, useRef, useState } from "react";
import styles from "./CuttingEdge.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TitleBar from "../../TitleBar/TitleBar";

const CuttingEdge = () => {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);

  const GAP = 24; // gap between cards
  const CLONE_COUNT = 3;

  const cards = [
    { icon: "/Svg/characterization-icon.svg", title: "Agent Characterization", bg: "#F1E7FC" },
    { icon: "/Svg/characterization-icon.svg", title: "Email Notifications", bg: "#FDE8EB" },
    { icon: "/Svg/characterization-icon.svg", title: "Speech Naturalization", bg: "#E2F0FF" },
    { icon: "/Svg/characterization-icon.svg", title: "Environment Setup", bg: "#FFEFE2" },
    { icon: "/Svg/calendar-icon.svg", title: "Book Calendar Meetings", bg: "#E5F6E1" },
    { icon: "/Svg/characterization-icon.svg", title: "Voice Personalization", bg: "#FBEAFF" },
    { icon: "/Svg/characterization-icon.svg", title: "AI Chat Integration", bg: "#E5F6E1" },
  ];

  const clonedStart = cards.slice(-CLONE_COUNT);
  const clonedEnd = cards.slice(0, CLONE_COUNT);
  const extendedCards = [...clonedStart, ...cards, ...clonedEnd];

  // compute card width dynamically
  const computeCardWidth = () => {
    const container = containerRef.current;
    if (!container) return 0;
    const cardEl = container.querySelector(`.${styles.card}`);
    if (!cardEl) return 0;
    return cardEl.offsetWidth + GAP;
  };

  // jump to first real card
  const jumpToMiddle = (w = null) => {
    const container = containerRef.current;
    if (!container) return;
    const cw = w ?? computeCardWidth();
    if (!cw) return;
    container.style.scrollBehavior = "auto";
    container.scrollLeft = cw * CLONE_COUNT;
    container.style.scrollBehavior = "smooth";
  };

  useEffect(() => {
    const setSizes = () => {
      const w = computeCardWidth();
      setCardWidth(w);
      setTimeout(() => jumpToMiddle(w), 20);
    };
    setSizes();
    window.addEventListener("resize", setSizes);
    return () => window.removeEventListener("resize", setSizes);
  }, []);

  const checkLoop = () => {
    const container = containerRef.current;
    if (!container || !cardWidth) return;
    const current = container.scrollLeft;

    // left clones
    if (current <= cardWidth * (CLONE_COUNT - 0.5)) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = current + cardWidth * cards.length;
      container.style.scrollBehavior = "smooth";
    }

    // right clones
    if (current >= cardWidth * (cards.length + CLONE_COUNT - 0.5)) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = current - cardWidth * cards.length;
      container.style.scrollBehavior = "smooth";
    }
  };

  // arrow click
  const handleArrow = (dir) => {
    const container = containerRef.current;
    if (!container || !cardWidth) return;
    const amount = cardWidth * (dir === "right" ? 1 : -1);
    container.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(() => checkLoop(), 420);
  };

  // drag
  const startDrag = (clientX) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    startScrollRef.current = container.scrollLeft;
    container.classList.add(styles.dragging);
  };

  const duringDrag = (clientX) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    container.scrollLeft = startScrollRef.current - (clientX - startXRef.current);
  };

  const stopDrag = () => {
    isDraggingRef.current = false;
    const container = containerRef.current;
    if (container) container.classList.remove(styles.dragging);
    setTimeout(() => checkLoop(), 50);
  };

  return (
    <section className={styles.section}>
      <TitleBar
                        subTitle="Cutting-Edge "
                        spanText="Features"
                        title="Powered by Our AI Receptionist"
                        
                    />

      <div className={styles.sliderWrapper}>
        <button className={`${styles.arrowBtn} ${styles.left}`} onClick={() => handleArrow("left")}>
          <FaChevronLeft />
        </button>

        <div
          className={styles.slider}
          ref={containerRef}
          onMouseDown={(e) => { e.preventDefault(); startDrag(e.pageX); }}
          onMouseMove={(e) => duringDrag(e.pageX)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchMove={(e) => duringDrag(e.touches[0].pageX)}
          onTouchEnd={stopDrag}
        >
          {extendedCards.map((card, i) => (
            <div key={i} className={styles.card} style={{ backgroundColor: card.bg }}>
              <img src={card.icon} alt={card.title} className={styles.icon} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

        <button className={`${styles.arrowBtn} ${styles.right}`} onClick={() => handleArrow("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CuttingEdge;
