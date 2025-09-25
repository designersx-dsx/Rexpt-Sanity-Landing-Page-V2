import React from 'react'
import styles from '../YourAdvantage/YourAdvantage.module.css'
import TitleBar from '../../TitleBar/TitleBar'

const YourAdvantage = () => {

    return (
        <>
            <div className={styles.containerBox}>
                <div className={styles.TitleBarDiv}>
                    <TitleBar
                        subTitle="Our Impact,"
                        spanText="Your Advantage"
                        title="Transforming Business Communications"
                    />
                </div>
                <div className={styles.container}>
                    {/* First Card */}
                    <div className={`${styles.card} ${styles.cardPrimary}`}>
                        <div className={styles.contentdiv}>
                            <div className={styles.icon}>
                                <img src="/Svg/call-svg.svg" alt="call" />
                            </div>
                            <div>
                                <h2 className={styles.bigText}>50K+</h2>
                            </div>
                            <div className={styles.BottomContaint}>
                                <div className={styles.btn}>
                                    <img src='/Svg/join-btn.svg' alt='join-btn' />
                                    
                                </div>
                                <div className={styles.SubTextDisc}>
                                    <p className={styles.subText}>Calls Handled Daily</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className={styles.card}>
                        <div className={styles.contentdiv}>
                            <div className={styles.icon}>
                                <img src="/Svg/star-svg.svg" alt="stars" />
                            </div>
                            <div>
                                <h2 className={styles.percent}>95%</h2>
                            </div>
                            <div>
                                <p className={styles.subText2}>Customer Satisfactions</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className={styles.card}>
                        <div className={styles.contentdiv}>
                            <div className={styles.icon}>
                                <img src="/Svg/cost-svg.svg" alt="cost" />
                            </div>
                            <div>
                                <h2 className={styles.percent}>80%</h2>
                            </div>
                            <div>
                                <p className={styles.subText2}>Cost Reduction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YourAdvantage
