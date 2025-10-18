import React, { useState } from 'react'
import styles from '../TabSection/TabSection.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabData = [
        {
            title: "Rexpt App",
            heading: "Your AI Receptionist Anytime, Anywhere",
            features: [
                { icon: "/Svg/login-icon.svg", text: "Seamless Login & Signup", subtext: 'Quick mobile number verification and basic details let users onboard in seconds.' },
                { icon: "/Svg/setup-icon.svg", text: "AI Receptionist Setup", subtext: 'Easily configure your business’s virtual receptionist with voice, greeting, and response settings.' },
                { icon: "/Svg/dashboard--icon.svg", text: "Real-time Dashboard", subtext: 'Track calls, customer interactions, and responses in one place with live analytics.' }
            ],


            buttonText: "View the Demo",
            img: "/Images/rexpt-app.png",
            ellips1: "/Svg/Ellipse-green-dark.svg",
            ellips2: "/Svg/Ellipse-yellow.svg",

        },
        {
            title: "Smart Call Routing",
            heading: "BOOST YOUR LEAD CAPTURE",
            features: [
                { icon: "/Svg/login-icon.svg", text: "Seamless Login & Signup", subtext: 'Quick mobile number verification and basic details let users onboard in seconds.' },
                { icon: "/Svg/setup-icon.svg", text: "AI Receptionist Setup", subtext: 'Easily configure your business’s virtual receptionist with voice, greeting, and response settings.' },
                { icon: "/Svg/dashboard--icon.svg", text: "Real-time Dashboard", subtext: 'Track calls, customer interactions, and responses in one place with live analytics.' }
            ],
            quote:
                "Lead Scan helps you capture and qualify leads faster, improving your sales efficiency and closing rates.",

            buttonText: "Start Scanning",
            img: "/Images/Qualify-Lead.png"
        },
        {
            title: "Admin Panel",
            heading: "BE THERE FOR YOUR CUSTOMERS, ANYTIME",
            features: [
                { icon: "/Svg/login-icon.svg", text: "Seamless Login & Signup", subtext: 'Quick mobile number verification and basic details let users onboard in seconds.' },
                { icon: "/Svg/setup-icon.svg", text: "AI Receptionist Setup", subtext: 'Easily configure your business’s virtual receptionist with voice, greeting, and response settings.' },
                { icon: "/Svg/dashboard--icon.svg", text: "Real-time Dashboard", subtext: 'Track calls, customer interactions, and responses in one place with live analytics.' }
            ],
            quote:
                "Provide round-the-clock support without burning out your team. Our hybrid model ensures every inquiry is answered.",

            buttonText: "Go Live Now",
            img: "/Images/24Live.png"
        },


    ];
    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabNav}>
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabButton} ${activeTab === index ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {/* Left Side */}
                <div className={styles.left}>
                    <h2>{tabData[activeTab].heading}</h2>
                    <div className={styles.features}>
                        {tabData[activeTab].features.map((f, i) => (
                            <div key={i} className={styles.featureItem}>
                                <span className={styles.icon}><img src={f.icon} alt='icon' /></span>
                                <div className={styles.textDiv}>
                                    <span className={styles.text}>{f.text}</span>
                                    <span className={styles.subtext}>{f.subtext}</span>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={styles.discoverDiv}>

                        <div className={styles.demoBtn}>
                            <AnimatedBtn text="Get Started for FREE" />
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className={styles.right}>
                    <div className={styles.imgDiv}>
                        <img
                            src={tabData[activeTab].img}
                            alt={tabData[activeTab].title}
                        />
                    </div>

                    <div className={styles.EllopsDiv}>
                        <img className={styles.EllipseImg1} src={tabData[activeTab].ellips1} alt='ellips3' />
                        <img className={styles.EllipseImg2} src={tabData[activeTab].ellips2} alt='ellips2' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabSection
