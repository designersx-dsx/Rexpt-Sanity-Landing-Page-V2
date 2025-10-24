import React from 'react'
import styles from '../PreCallFeature/PreCallFeature.module.css'
import TitleBar from '../../TitleBar/TitleBar'

const cardsData = [
    {
        title: "Smart Call Preparation",
        desc: "Train your AI and set up the environment for smooth calls.",
        img: "/Images/pre-call-img1.png",
    },
    {
        title: "Calendar & Appointment Management",
        desc: "Book and manage meetings seamlessly before the call starts.",
        img: "/Images/pre-call-img2.png",

    },
    {
        title: "Notifications & Alerts",
        desc: "Get email and SMS updates to stay on top of calls.",
        img: "/Images/pre-call-img3.png",
    },
    {
        title: "Caller Screening & Safety",
        desc: "Filter spam, detect profanity, and analyze caller info in advance.",
        img: "/Images/pre-call-img4.png",
    },
];

const PreCallFeature = () => {
    return (
        <div className={styles.MianDiv}>

            <div className={styles.containerBox}>
                <div className={styles.TitleSection}>
                    <TitleBar
                        subTitle="Additional "
                        spanText="Features"
                        title="Pre-Built CRM Features"
                    />
                </div>
                <div className={styles.container}>
                    <section className={styles.section}>
                        <div className={styles.cardsWrapper}>
                            {cardsData.map((card, i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.text}>
                                        <h3>{card.title}</h3>

                                    </div>
                                    <div className={styles.descP}><p>{card.desc}</p></div>
                                    <div className={styles.imgWrapper}>
                                        <img src={card.img} alt={card.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                </div>
                
                <div className={styles.ocean}>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                </div>
            </div>
        </div>
    )
}

export default PreCallFeature
