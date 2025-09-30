import React, { useEffect, useState } from 'react';
import styles from '../HeroComponent/MobileAnimate.module.css';

const slides = [
  {
    bg: "/Svg/Dashboard01.svg",
    header: "/Svg/Header.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: true,
    blinkClass: styles.blinkCenter01, // custom blink class
  },
  {
    bg: "/Svg/Dashboard02.svg",
    header: "/Svg/Header02.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: true,
    blinkClass: styles.blinkBottom02, // custom blink class
  },
  {
    bg: "/Svg/Dashboard03.svg",
    header: "/Svg/Header03.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: false,
    blinkClass: styles.blinkCenter01, // custom blink class
  },
  {
    bg: "/Svg/Dashboard04.svg",
    header: "/Svg/Header04.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: false,
    blinkClass: styles.blinkCenterNone, // custom blink class
  },
];

const MobileAnimate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [step, setStep] = useState("scrollDown");
  const [showBlink, setShowBlink] = useState(false);

  useEffect(() => {
    let timer;

    if (step === "scrollDown") {
      setScrollDirection("down");
      timer = setTimeout(() => setStep("scrollUp"), 3000);
    }

    if (step === "scrollUp") {
      setScrollDirection("up");
      timer = setTimeout(() => setStep("pause"), 2000);
    }

    if (step === "pause") {
      setTimeout(() => setShowBlink(true), 500);

      timer = setTimeout(() => {
        setShowBlink(false);
        setFade(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setFade(false);
          setStep("scrollDown");
        }, 800);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [step]);

  const { bg, header, footer, showFooter, blinkClass } = slides[currentSlide];

  return (
    <div className={styles.sectionImage}>
      <div className={styles.mobileframe}>
        {/* Header */}
        <div className={styles.headerImage}>
          <img src={header} alt="header" />
        </div>

        {/* Background */}
        <div
          key={currentSlide + scrollDirection}
          className={`${styles.scrollingBg} ${fade ? styles.fadeOut : styles.fadeIn} ${
            scrollDirection === "up" ? styles.scrollUp : ""
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Footer only if allowed */}
        {showFooter && (
          <div className={styles.footerImage}>
            <img src={footer} alt="footer" />
          </div>
        )}

        {/* Red blinking fake click */}
        {showBlink && <div className={`${styles.redBlinkClick} ${blinkClass}`} />}
      </div>
    </div>
  );
};

export default MobileAnimate;
