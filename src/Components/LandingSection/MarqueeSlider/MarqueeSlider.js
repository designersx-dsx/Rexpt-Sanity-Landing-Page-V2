import React from 'react'
import styles from '../MarqueeSlider/MarqueeSlider.module.css'
const MarqueeSlider = () => {
    return (
        <div className={styles.MarqueeMain}>
            <div className={styles.Marquee}>
                <div className={styles.MarqueeContent}>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_1.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_2.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_3.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_4.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='Images/logo_scroller_6.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='Images/logo_scroller_7.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_1.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_2.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_3.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='/Images/logo_scroller_4.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='Images/logo_scroller_6.png' alt='' /></div>
                    <div className={styles.MarqueeTag}><img src='Images/logo_scroller_7.png' alt='' /></div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSlider
