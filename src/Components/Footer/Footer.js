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
                    <div className={styles.desc}>
                        <p>Your <span className={styles.Boldtext}>24/7 AI receptionist</span> – answering, connecting, and growing your business.</p>
                    </div>
                    <div className={styles.socialIon}>
                        <div className={styles.right}>
                            <a href="https://www.linkedin.com/company/rxpt/" target="_blank" rel="noopener noreferrer">
                                <img src="Svg/linkedin.svg" alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/rexptus/" target="_blank" rel="noopener noreferrer">
                                <img src="Svg/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/rexptus" target="_blank" rel="noopener noreferrer">
                                <img src="Svg/facebook.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.youtube.com/@rexptin" target="_blank" rel="noopener noreferrer">
                                <img src="Svg/youtube.svg" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.RightBar}>
                    <div className={styles.footer}>
                        <div className={styles.column}>
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li>Home</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>RESOURCES</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Help Center</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>COMPANY</h4>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.BottomLogo}>
                <img src='/Images/rexpt-bootm-logo.png' alt='rexpt-bootm-logo' />
            </div>
        </div>
    )
}

export default Footer
