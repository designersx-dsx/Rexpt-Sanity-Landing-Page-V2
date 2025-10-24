import React from 'react'
import styles from "../SmarterReception/MobSmarter.module.css"

const MobSmarter = () => {
    return (
        <div className={styles.MobSmarterContainer}>
            <div className={styles.FirstCard}>
                <div className={styles.boxCard1}>
                    <div className={styles.Part1Img}><img src='/Svg/part-1-top-shape.svg' alt='part-1-top-shape' /> </div>
                    <div className={styles.Part1}>
                        <h3 >Quick Onboarding</h3>
                        <p>Start using Rexpt in seconds with mobile verification and simple signup.</p>
                        <div className={styles.watch2}>
                            <img src='/Svg/watch2-icon.svg' alt='watch2-icon' />
                        </div>


                    </div>
                </div>

            </div>
            <div className={styles.Section2}>
                <div className={styles.Part2}>
                    <div className={styles.callIcon}>
                        <img src='/Svg/call-icon2.svg' alt='call-icon2' />
                    </div>
                    <h3>FREE VoIP Number</h3>
                </div>
                <div className={styles.Part4}>
                    <div className={styles.analyticsIcon}>
                        <img src='/Svg/analytics-report.svg' alt='Analytics & Reports' />
                    </div>
                    <h3>Analytics & Reports</h3>
                </div>
            </div>
            <div className={styles.ThirdtCard}>
                <div className={styles.boxCard1}>
                    <div className={styles.Part3Img}><img src='/Svg/part-3-top-shape.svg' alt='part-1-top-shape' /> </div>
                    <div className={styles.Part3}>
                        <h3 >Quick Onboarding</h3>
                        <p>Start using Rexpt in seconds with mobile verification and simple signup.</p>
                        <div className={styles.watch}>
                            <img src='/Svg/website-widget.svg' alt='website-widget' />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobSmarter
