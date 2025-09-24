import React from 'react'
import styles from '../YourAdvantage/YourAdvantage.module.css'
import TitleBar from '../../TitleBar/TitleBar'
const YourAdvantage = () => {
    return (
        <>
            <div className={styles.containerBox}>
                <div className={styles.TitleBarDiv}>
                    <TitleBar subTitle="Our Impact," spanText="Your Advantage" title="Transforming Business Communications" />
                </div>
                <div className={styles.container}>
                    {/* First Card */}
                    <div className={`${styles.card} ${styles.cardPrimary}`}>
                        <div className={styles.icon}>
                            <img src="/icons/call.png" alt="call" />
                        </div>
                        <h2 className={styles.bigText}>50K+</h2>
                        <p className={styles.subText}>Calls Handled Daily</p>
                        <button className={styles.btn}>Join rexpt</button>
                    </div>

                    {/* Second Card */}
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <img src="/icons/stars.png" alt="stars" />
                        </div>
                        <h2 className={styles.percent}>95%</h2>
                        <p className={styles.subText}>Customer Satisfactions</p>
                    </div>

                    {/* Third Card */}
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <img src="/icons/cost.png" alt="cost" />
                        </div>
                        <h2 className={styles.percent}>80%</h2>
                        <p className={styles.subText}>Cost Reduction</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default YourAdvantage
