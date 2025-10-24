import React from 'react'
import styles from '../HeroBar/HeroBar.module.css'

const HeroBar = ({ title, subtitle, align = "center" }) => {
  return (
    <div className={styles.HeroMain}>
      <div className={styles.heroBar}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.Ellipse}>
        <img src='/Svg/Ellipse-green.svg' alt='Ellipse-green' />
      </div>
    </div>

  );
};

export default HeroBar;
