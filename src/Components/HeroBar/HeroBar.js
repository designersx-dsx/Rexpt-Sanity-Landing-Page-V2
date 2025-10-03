import React from 'react'
import styles from '../HeroBar/HeroBar.module.css'

const HeroBar = ({ title, subtitle, align = "center" }) => {
  return (
    <div className={styles.heroBar}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default HeroBar;
