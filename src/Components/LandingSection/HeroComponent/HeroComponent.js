import React from 'react'
import styles from '../HeroComponent/HeroComponent.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn'
import MobileAnimate from './MobileAnimate'
const HeroComponent = () => {
  return (
    <div className={styles.containerBox}>
      {/* <div className={styles.marqueeTrack}>
        <img src="/Svg/strip-img.svg" alt="strip-img" />
      </div> */}
      <div className={styles.UpperDiv}>
        <div className={styles.LeftSection}>
          <div className={styles.ContentDiv}>
            <h1 className={styles.Title}>Never Miss a Call Never Miss a Client</h1>
            <p className={styles.Description}>Ensure quality leads and bookings as agents handle calls, deliver high-quality appointments, and seamlessly integrate with your current system for streamlined operations.</p>
            <div className={styles.BtnDiv}>
              <AnimatedBtn text="Get Started for FREE" />
            </div>
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.RightImg}>
            {/* <img src='Images/holding-phone.png' alt='holding-phone' /> */}
            <div className={styles.container}>
              {/* Left side (colored sections) */}
              <div className={styles.left}>
                <div className={`${styles.section} ${styles.yellow}`}>
                  <div className={`${styles.icon} ${styles.AnimationCall}`} >
                    <img src='/Svg/Call-First.svg' alt='24/7 Call Handling' />
                  </div>
                  <h3 className={styles.Bold}>24/7 Call Handling</h3>
                </div>

                <div className={`${styles.section} ${styles.green}`}>
                  <div className={`${styles.icon} ${styles.AnimationLanguage}`}>
                    <img src='/Svg/language-icon.svg' alt='32+ language' />
                  </div>
                  <h3 className={styles.Bold}>32+ Languages</h3>
                </div>
                <div className={styles.sectionImage} >
                  {/* <img className={styles.phoneImage} src='Images/holding-phone01.png' alt='holding-phone' /> */}
                  <MobileAnimate />
                </div>

                <div className={`${styles.section} ${styles.blue}`}>
                  <div className={`${styles.icon} ${styles.AnimationInteraction}`}>
                    <img src='/Svg/Effortless-Integration.svg' alt='Effortless Integration' />
                  </div>
                  <h3 className={styles.Bold}>Effortless Integration</h3>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
