// NextLevelFeatures.jsx
import React, { useState } from 'react';
import styles from '../NextLevelFeatures/NextLevelFeatures.module.css';
import TitleBar from '../../TitleBar/TitleBar';

const NextLevelFeatures = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const data1 = [
        { id: 1, title: "24/7 Call Handling", desc: "Automatically answer and manage incoming calls with natural voice responses and lead nurturing for your business 24/7.", icon: "/Svg/call-handling.svg", gradient: "linear-gradient(90deg, #DAC9FF 0%, #F6F2FF 100%)", borderColor: "#DAC9FF" },
        { id: 2, title: "Appointment Scheduling", desc: "Automatically schedule and manage appointments seamlessly with AI-powered tools.", icon: "/Svg/appointment-scheduling.svg", gradient: "linear-gradient(90deg, #FFCADE 0%, #FFEAF2 100%)", borderColor: "#FFC5DB" },
        { id: 3, title: "Intelligent Call Routing / Transfer", desc: "Route calls intelligently to the right department or person automatically.", icon: "/Svg/call-transfer.svg", gradient: "linear-gradient(90deg, #FFF1AC 0%, #FFFAE2 100%)", borderColor: "#FFF1AC" },
    ];

    const data2 = [
        { id: 4, title: "Lead Nurturing & Analysis", desc: "Analyze and nurture leads effectively to grow your business.", icon: "/Svg/lead-nurturing.svg", gradient: "linear-gradient(90deg,  #ABF4CF 0%, #E2F2EA 100%)", borderColor: "#ABF4CF" },
        { id: 5, title: "FEATURES" },
        { id: 6, title: "Human-like Conversations at Scale", desc: "Engage in realistic, human-like conversations.", icon: "/Svg/human-like.svg", gradient: "linear-gradient(90deg, #D5EB94 0%,  #EFF5DE 100%)", borderColor: "#D5EB94" },
    ];

    const data3 = [
        { id: 7, title: "AI Insights", desc: "Get smart insights on customer behavior.", icon: "/Svg/ai-insights.svg", gradient: "linear-gradient(90deg, #FFD1AE 0%, #F8E8DC 100%)", borderColor: "#FFD1AE" },
        { id: 8, title: "Call History, Recording & Summary", desc: "Connect with customers across multiple platforms seamlessly.", icon: "/Svg/multichannel.svg", gradient: "linear-gradient(90deg, #ADEBF8 0%, #E8FBFF 100%)", borderColor: "#ADEBF8" },
        { id: 9, title: "Analytics Dashboard", desc: "Track and visualize all your calls and leads in one place.", icon: "/Svg/analytics.svg", gradient: "linear-gradient(90deg, #FAE89E 0%, #FBF3D5 100%)", borderColor: "#FAE89E" },
        { id: 10, title: "Seamless Integration", desc: "Design automated workflows tailored to your business needs.", icon: "/Svg/workflow.svg", gradient: "linear-gradient(90deg, #E1B5EE 0%, #FCF0FF 100%)", borderColor: "#E1B5EE" },

    ];

    const renderCard = (item) => {

        if (item.id === 5) {
            return (
                <div
                    key={item.id}
                    className={`${styles.card} ${styles.specialCard}`}
                    style={{ backgroundImage: item.gradient, border: `2px solid ${item.borderColor}` }}
                >
                    {/* <h1 className={styles.specialTitle}>{item.title}</h1> */}
                    <h1 className={styles.specialTitle} >
                        <span>F</span>
                        <span>E</span>
                        <span>A</span>
                        <span>T</span>
                        <span>U</span>
                        <span>R</span>
                        <span>E</span>
                        <span>S</span>
                    </h1>
                </div>
            )
        }

        const noHoverIds = [];
        const hasHover = !noHoverIds.includes(item.id);

        return (
            <div
                key={item.id}
                className={styles.card}
                style={{ backgroundImage: item.gradient, border: `2px solid ${item.borderColor}` }}
                onMouseEnter={() => hasHover && setHoveredIndex(item.id)}
                onMouseLeave={() => hasHover && setHoveredIndex(null)}
            >
                <h3 className={styles.title}>{item.title}</h3>
                <p className={`${styles.desc} ${hasHover && hoveredIndex === item.id ? styles.show : ""}`}>
                    {item.desc}
                </p>
                <button className={`${styles.btn} ${hasHover && hoveredIndex === item.id ? styles.show : ""}`}>
                    Book a Demo
                </button>
                <div className={`${styles.icon} ${hasHover && hoveredIndex === item.id ? styles.hide : ""}`}>
                    <img src={item.icon} alt={item.title} />
                </div>
            </div>
        );
    };

    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <TitleBar subTitle="Next-Level" spanText="Features " title="With our AI Receptionist" />

                {/* First Section */}
                <div className={styles.GridSection}>
                    <div className={styles.grid}>
                        {data1.map((item) => renderCard(item))}
                    </div>
                    <div className={styles.gridSecond}>
                        {data2.map((item) => renderCard(item))}
                    </div>
                    <div className={styles.gridFive}>
                        {data3.map((item) => renderCard(item))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextLevelFeatures;
