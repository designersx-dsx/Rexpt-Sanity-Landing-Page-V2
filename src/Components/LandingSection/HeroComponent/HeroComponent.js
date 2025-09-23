import React from 'react'
import styles from '../HeroComponent/HeroComponent.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn'
const HeroComponent = () => {
  return (
    <div className={styles.containerBox}>
      <div className={styles.marqueeTrack}>
        <img src="/Svg/strip-img.svg" alt="strip-img" />
      </div>
      <div className={styles.UpperDiv}>
        <div className={styles.LeftSection}>
          <div className={styles.ContentDiv}>
            <h1 className={styles.Title}>Never Miss a Call Never Miss a Client</h1>
            <p className={styles.Description}>Conversations designed to move your business forward, with AI precision and human expertise.</p>
            <div className={styles.BtnDiv}>
              <AnimatedBtn text="Get Started for FREE" />
            </div>
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.RightImg}>
            <img src='Images/holding-phone.png' alt='holding-phone' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
