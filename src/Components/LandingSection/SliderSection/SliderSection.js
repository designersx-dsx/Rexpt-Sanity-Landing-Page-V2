import React, { useState } from "react";
import styles from '../SliderSection/SliderSection.module.css'
import TitleBar from "../../TitleBar/TitleBar";

const CardSlider = () => {
  const slides = [
    { id: 1, img: "Images/Slider1-Img.png", title: "24/7 Coverage", subtitle: "ANSWER EVERY CALL, INSTANTLY", maindes: "response ~ 2sec", desc: "Always-on, natural conversations provide accurate answers, schedule appointments, and hand off complex issues day or night." },
    { id: 2, img: "Images/Slider2-Img.png", title: "Booking Boost", subtitle: "More appointments, fewer no-shows", maindes: "Up to 40% lift", desc: "Real-time calendar sync confirms appointments, sends reminders, and simplifies rescheduling to lift conversions and cut no-shows." },
    { id: 3, img: "Images/Slider3-Img.png", title: "Lead Recovery", subtitle: "Capture missed & after-hours callers", maindes: "Up to 3× leads", desc: "Answer after-hours, auto-callback missed numbers, qualify intent, and route hot prospects to staff or instant calendar booking." },
    { id: 4, img: "Images/Slider4-Img.png", title: "Peak-Hour Control", subtitle: "Handle call spikes without holds", maindes: "Up to 50% dropout", desc: "Parallel answering absorbs call spikes, triages intent, books fast, and escalates urgent cases, reducing holds and abandons." },
    { id: 5, img: "Images/Slider5-Img.png", title: "Team Efficiency", subtitle: "Time back for your staff", maindes: "Up to 10+ hrs/week", desc: "Offload FAQs and scheduling so staff focus on customers, while notes sync to calendar, CRM, and POS automatically." },
    { id: 5, img: "Images/Slider6-Img.png", title: "Savings Driver", subtitle: "Reduce operational costs", maindes: "Up to 80 %", desc: "Automate answers and booking to replace repetitive calls, reduce staffing costs, and scale coverage without hiring." },
  ];

  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.TitleBarDiv}>
        <TitleBar subTitle="Key Performance" spanText="Highlights" title="Driving Better Results, Faster" />
      </div>


      <div className={styles.slider}>
        {slides.map((item, index) => {
          let position = "";
          if (index === active) {
            position = styles.activeSlide;
          } else if (index === (active - 1 + slides.length) % slides.length) {
            position = styles.prevSlide;
          } else if (index === (active + 1) % slides.length) {
            position = styles.nextSlide;
          } else {
            position = styles.hiddenSlide;
          }

          return (
            <div key={item.id} className={`${styles.slide} ${position}`}>
              <img src={item.img} alt={`Slide ${item.id}`} />
            </div>
          );
        })}

      </div>

      <div className={styles.contentMain}>
        <div className={styles.content}>

          <span className={styles.tag}>{slides[active].title}</span>
          <h2>{slides[active].subtitle}</h2>
          <p className={styles.LightFont}>
            {slides[active].maindes.split(" ").slice(0, -2).join(" ")}{" "}
            <span className={styles.boldtext}>
              {slides[active].maindes.split(" ").slice(-2).join(" ")}
            </span>
          </p>
          <p className={styles.CardDisc}>{slides[active].desc}</p>

          <div className={styles.arrowLeft} onClick={prevSlide}>
            <img src="/Svg/left-arrow.svg" alt="right-arrow" />
          </div>
          <div className={styles.arrowRight} onClick={nextSlide}>
            <img src="/Svg/right-arrow.svg" alt="right-arrow" />
          </div>
        </div>
      </div>



    </div>
  );
};

export default CardSlider;
