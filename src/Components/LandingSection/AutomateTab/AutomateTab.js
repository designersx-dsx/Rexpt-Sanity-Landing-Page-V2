import React, { useState } from 'react'
import styles from '../AutomateTab/AutomateTab.module.css'
import AnimatedBtn from '../../AnimatedBtn/AnimatedBtn';
import TitleBar from '../../TitleBar/TitleBar';

const AutomateTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabData = [
        {
            title: "Instant Reply",
            heading: "AUTOMATE YOUR RECEPTION WITH AI",
            features: [
                { icon: "/Svg/watch-icon.svg", text: "0 second response time" },
                { icon: "/Svg/smart-watch-icon.svg", text: "Smart Scheduling" }
            ],
            quote:
                "With Rexp't AI receptionist, every call is answered instantly. Our customers love the fast, professional response, and we’ve seen a clear boost in lead conversions.",
            linkText: "Discover More Success Stories",
            buttonText: "View the Demo",
            img: "/Images/bell-img.png"
        },
        {
            title: "Qualify Lead",
            heading: "BOOST YOUR LEAD CAPTURE",
            features: [
                { icon: "/Svg/watch-icon.svg", text: "Real-time lead scanning" },
                { icon: "/Svg/smart-watch-icon.svg", text: "Detailed conversion analytics" }
            ],
            quote:
                "Lead Scan helps you capture and qualify leads faster, improving your sales efficiency and closing rates.",
            linkText: "Learn How It Works",
            buttonText: "Start Scanning",
            img: "/Images/Qualify-Lead.png"
        },
        {
            title: "24/7 Live",
            heading: "BE THERE FOR YOUR CUSTOMERS, ANYTIME",
            features: [
                { icon: "/Svg/watch-icon.svg", text: "Always-on service" },
                { icon: "/Svg/smart-watch-icon.svg", text: "Human + AI collaboration" }
            ],
            quote:
                "Provide round-the-clock support without burning out your team. Our hybrid model ensures every inquiry is answered.",
            linkText: "Explore 24/7 Live Support",
            buttonText: "Go Live Now",
            img: "/Images/24Live.png"
        },
        {
            title: "Calendar Booking",
            heading: "SCHEDULE MEETINGS IN SECONDS",
            features: [
                { icon: "/Svg/watch-icon.svg", text: "One-click scheduling" },
                { icon: "/Svg/smart-watch-icon.svg", text: "Integrated with your calendar" }
            ],
            quote:
                "Quick Book removes the friction from scheduling. Clients can instantly book a time that works for them and you.",
            linkText: "Discover Quick Book",
            buttonText: "Try Quick Book",
            img: "/Images/Calendar-Booking.png"
        },
        {
            title: "Smart Stats",
            heading: "TURN DATA INTO GROWTH",
            features: [
                { icon: "/Svg/watch-icon.svg", text: "Real-time analytics" },
                { icon: "/Svg/smart-watch-icon.svg", text: "Actionable insights" }
            ],
            quote:
                "Smart Stats gives you a clear picture of your performance so you can make better decisions, faster.",
            linkText: "See Analytics in Action",
            buttonText: "View Stats",
            // img: "/Images/bell-img.png"
            video: "/Video/smart-stats-demo.mp4"

        }
    ];
    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.TopSection}>
                <div className={styles.LeftBar}>
                    <TitleBar
                        subTitle="See how"
                        spanText="Rexpt Works"
                        title="Seamlessly in real time."
                    />
                </div>

                <div className={styles.RightBar}>
                    <p className={styles.RightDesc}>Experience the full workflow—how Rexpt listens, understands, and delivers solutions seamlessly.</p>
                </div>

            </div>
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
                                <span>{f.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.quotediv}>
                        <img src='/Svg/quots-svg.svg' />
                        <p className={styles.quote}>{tabData[activeTab].quote}</p>
                    </div>
                    <div className={styles.discoverDiv}>
                        <a href="#" className={styles.link}>
                            {tabData[activeTab].linkText} →
                        </a>
                        <div className={styles.demoBtn}>
                            <AnimatedBtn text="View the Demo" />
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className={styles.right}>
                    {tabData[activeTab].title === "Smart Stats" ? (
                        <video
                            src={tabData[activeTab].video}
                            autoPlay
                            muted
                            loop
                            controls
                            className={styles.video}
                        />
                    ) : (
                        <img
                            src={tabData[activeTab].img}
                            alt={tabData[activeTab].title}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AutomateTab
