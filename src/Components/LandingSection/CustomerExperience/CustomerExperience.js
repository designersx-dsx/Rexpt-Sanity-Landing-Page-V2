import React from 'react'
import styles from '../CustomerExperience/CustomerExperience.module.css'
import TitleBar from '../../TitleBar/TitleBar'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn'
const CustomerExperience = () => {


    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <TitleBar
                        subTitle="Transform Customer,"
                        spanText="Experience"
                        title="Let’s Build Something Intelligent Together"
                        marginBlock="0px"
                    />
                </div>
            </div>
            <div className={styles.CenterSection}>
                <div className={styles.ForestImg}>
                    <div className={styles.scroller}>
                        <img src="/Images/forest-img.png" alt="forest" />
                        <img src="/Images/forest-img2.png" alt="forest" />
                        <img src="/Images/forest-img.png" alt="forest" />
                        <img src="/Images/forest-img2.png" alt="forest" />
                    </div>
                </div>

                <div className={styles.BottomSection}>
                    <div className={styles.LeftBar}>
                        <div className={styles.wrapper}>
                            <div className={styles.ripple}></div>
                            <div className={styles.ripple}></div>
                            <div className={styles.ripple}></div>
                            <img src="/Svg/ripple-logo.svg" alt="ripple-logo" className={styles.logo} />
                        </div>
                    </div>
                    <div className={styles.RightBar}>
                        <div className={styles.card}>
                            <form className={styles.ContactForm}>
                                <p className={styles.FormLabel}>
                                    Hello! I’m <input type="text" className={styles.inputFull} />
                                </p>

                                <p className={styles.FormLabel}>
                                    and my business name is<input type="text" className={styles.inputFull} />
                                </p>

                                <p className={styles.FormLabel}>
                                    & my Business Category is<input type="text" className={styles.inputFull} /> .
                                </p>

                                <p className={styles.FormLabel}>
                                    You can reach me at Phone<input type="number" className={styles.inputFull} />
                                </p>

                                <p className={styles.FormLabel}>
                                    and my email ID is <input type="email" className={styles.inputFull} />
                                </p>


                            </form>
                            <div className={styles.btn}>
                                <AnimatedBtn text='Get Started +' fontFamily="Arboria Medium" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerExperience
