import React, { useState } from 'react'
import styles from '../SmarterReception/SmarterReception.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn'

const SmarterReception = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.FirstCard}>
                    <div>
                        <div className={styles.Part1Img}><img src='/Svg/part-1-top-shape.svg' alt='part-1-top-shape' /> </div>
                        <div className={styles.Part1}>
                            <h3 >Quick Onboarding</h3>
                            <p>Start using Rexpt in seconds with mobile verification and simple signup.</p>
                            <div className={styles.watch2}>
                                <img src='/Svg/watch2-icon.svg' alt='watch2-icon' />
                            </div>


                        </div>
                    </div>

                    <div className={styles.Part2}>
                        <div className={styles.callIcon}>
                            <img src='/Svg/call-icon2.svg' alt='call-icon2' />
                        </div>
                        <h3>FREE VoIP Number</h3>
                    </div>

                </div>
                <div className={styles.SecondtCard}>
                    <div className={styles.AnimatedBtnDiv}>
                        <AnimatedBtn text="Get Started for FREE" />
                    </div>
                    <div className={styles.videoContainer}>
                        {!isPlaying ? (
                            <div className={styles.thumbnailWrapper} onClick={handlePlay}>
                                <img src="/Images/features-thumbnail.png" alt="features-thumbnail" className={styles.thumbnail} />
                                <div className={styles.playButton}>
                                    <img src='/Svg/play-button.svg' alt='play-button' />
                                </div>
                            </div>
                        ) : (
                            <video className={styles.video} controls autoPlay>
                                <source src="/Video/smart-stats-demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>

                </div>
                <div className={styles.ThirdtCard}>
                    <div>
                        <div className={styles.Part3Img}><img src='/Svg/part-3-top-shape.svg' alt='part-1-top-shape' /> </div>
                        <div className={styles.Part3}>
                            <h3 >Quick Onboarding</h3>
                            <p>Start using Rexpt in seconds with mobile verification and simple signup.</p>
                            <div className={styles.watch}>
                                <img src='/Svg/website-widget.svg' alt='website-widget' />
                            </div>


                        </div>
                    </div>

                    <div className={styles.Part4}>
                        <div className={styles.analyticsIcon}>
                            <img src='/Svg/analytics-report.svg' alt='Analytics & Reports' />
                        </div>
                        <h3>Analytics & Reports</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmarterReception
