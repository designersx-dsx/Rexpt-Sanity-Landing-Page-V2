import React from 'react'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.LeftBar}>
                    <div className={styles.Logodiv}>
                        <img src='/Svg/rexpt-logo.svg' alt='rexpt-logo' />
                    </div>
                    <div>
                        <p>Your <b>24/7 AI receptionist</b> – answering, connecting, and growing your business.</p>
                    </div>
                </div>
                <div className={styles.RightBar}>
                    <h1>Right</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
