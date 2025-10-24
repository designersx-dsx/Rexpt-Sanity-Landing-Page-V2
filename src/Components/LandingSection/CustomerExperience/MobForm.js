import React from 'react'
import styles from './CustomerExperience.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn'
const MobForm = () => {
    return (
        <div>
            <div className={styles.formContainer}>
                <h2>Hello! I’m</h2>

                <input
                    type="text"
                    placeholder="Enter your name"
                    className={styles.dashedInput}
                />

                <p>and my business name is</p>
                <input
                    type="text"
                    placeholder="Enter business name"
                    className={styles.dashedInput}
                />

                <p>& my Business Category is</p>
                <input
                    type="text"
                    placeholder="Enter category"
                    className={styles.dashedInput}
                />

                <p>You can reach me at Phone</p>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    className={styles.dashedInput}
                />

                <p>and my email ID is</p>
                <input
                    type="email"
                    placeholder="Enter email ID"
                    className={styles.dashedInput}
                />

                <div className={styles.btnMob}>
                    <AnimatedBtn text='Get Started +' fontFamily="Arboria Medium" />
                </div>
            </div>
        </div>
    )
}

export default MobForm
