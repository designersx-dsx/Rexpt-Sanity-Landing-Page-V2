import React, { useEffect, useState } from 'react';
import styles from '../HeroComponent/MobileAnimate.module.css';

const slides = [
  {
    bg: "/Svg/Dashboard01.svg",
    header: "/Svg/Header.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: true
  },
  {
    bg: "/Svg/Dashboard02.svg",
    header: "/Svg/Header02.svg",
    footer: "/Svg/Footer-Nav.svg",
    showFooter: false
  },
];

const MobileAnimate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down'); // 'down' or 'up'
  const [step, setStep] = useState('scrollDown'); // scrollDown -> scrollUp -> pause
  const [showBlink, setShowBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 'scrollDown') {
        setScrollDirection('down');
        setStep('scrollUp');
      } else if (step === 'scrollUp') {
        setScrollDirection('up');
        setStep('pause');
        // Blink will appear 1s before next slide
        setTimeout(() => setShowBlink(true), 10000); // show blink 1s before next slide
      } else if (step === 'pause') {
        setTimeout(() => {
          setShowBlink(false);
          setFade(true); // fade out next slide
          setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setFade(false);
            setStep('scrollDown');
          }, 1000); // fade duration
        }, 6000); // total scroll duration
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [step]);

  const { bg, header, footer, showFooter } = slides[currentSlide];

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
            scrollDirection === 'up' ? styles.scrollUp : ''
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
        {showBlink && <div className={styles.redBlinkClick}></div>}
      </div>
    </div>
  );
};

export default MobileAnimate;
