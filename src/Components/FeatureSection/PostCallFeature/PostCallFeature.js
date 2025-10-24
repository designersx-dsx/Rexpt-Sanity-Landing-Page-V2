import React from 'react'
import styles from '../PostCallFeature/PostCallFeature.module.css'
import TitleBar from '../../TitleBar/TitleBar'

const PostCallFeature = () => {
    return (
        <div className={styles.containerBox}>
            <div className={styles.TitleSection}>
                <TitleBar
                    subTitle="Additional "
                    spanText="Features"
                    title="Post-Call Features"
                />
            </div>
            <div className={styles.container}>
                {/* Left Card */}
                <div className={styles.leftCard}>
                    <h2>Seamless Voice Capture</h2>
                    <p>
                        Our system provides real-time lossless voice recording/capture during the call.
                    </p>

                    <div className={styles.waveContainer}>
                        <div className={styles.centerLogo}>
                            <img src='/Svg/logo-rounded.svg' alt="bot" />
                        </div>

                        {/* Animated Tooltips */}
                        <div className={`${styles.tooltip} ${styles.tooltip1}`}>Do not forget to check</div>
                        <div className={`${styles.tooltip} ${styles.tooltip2}`}>Ok, Fine</div>
                        <div className={`${styles.tooltip} ${styles.tooltip3}`}>My takeaway dinner</div>
                        <div className={`${styles.tooltip} ${styles.tooltip4}`}>Wait. Let you know</div>
                        <div className={`${styles.tooltip} ${styles.tooltip5}`}>Hmm, Sofia</div>
                        <div className={`${styles.tooltip} ${styles.tooltip6}`}>Ask again</div>

                        {/* Concentric Circles */}
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={styles.circle} style={{ animationDelay: `${i * 1}s` }}></div>
                        ))}
                    </div>
                </div>

                {/* Right Card */}
                <div className={styles.rightCard}>
                    <h2>Call Transcription</h2>
                    <p>Automatically convert calls into text for easy review.</p>

                    <div className={styles.chatBox}>
                        <div className={styles.waveform}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.chatDetails}>
                            <p>
                                <strong>Customer:</strong> Hi, I need help with my order.
                            </p>
                            <p>
                                <strong>Agent:</strong> Sure, I can assist you with that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
                {/* Right Card */}
                <div className={styles.rightCard}>
                    <h2>Follow-Up Reminders</h2>
                    <p>Get notifications to follow up with leads after each call.</p>

                    <div className={styles.bellDiv}>
                        <img src='/Svg/follow-up-icon.svg' alt='follow-up-icon' />
                    </div>

                </div>
                {/* Left Card */}
                <div className={styles.leftCard}>
                    <h2>Call Recording</h2>
                    <p>
                        Automatically record all incoming calls, allowing you to review conversations, track customer interactions, and ensure no detail is missed.
                    </p>

                    <div className={styles.waveContainer}>


                        <div className={styles.waveform}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCallFeature
