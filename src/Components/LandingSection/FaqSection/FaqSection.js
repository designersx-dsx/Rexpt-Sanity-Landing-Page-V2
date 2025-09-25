import React, { useState } from 'react'
import styles from "../FaqSection/FaqSection.module.css"
import TitleBar from "../../TitleBar/TitleBar";
const FaqSection = () => {
    const faqs = [
        {
            question: "What is Rexpt and how does it work?",
            answer:
                "Rexpt is an AI-powered receptionist platform that automates customer calls, answers queries instantly, and connects leads to your business in real time.."
        },
        {
            question: "Can Rexpt handle multiple calls at the same time?",
            answer:
                "Yes, Rexpt can manage multiple calls simultaneously by using AI-driven call routing and natural language processing, allowing it to interact with several customers at once without any delay or dropped calls."
        },
        {
            question: "Can Rexpt handle multiple calls at the same time?",
            answer:
                "Absolutely. Rexpt is designed to scale efficiently, so it can engage with many callers concurrently, ensuring each query is addressed promptly and each lead is connected appropriately."
        },
        {
            question: "Can Rexpt handle multiple calls at the same time",
            answer:
                "Yes, Rexpt’s AI architecture allows it to process numerous conversations in parallel, providing consistent responses and managing call flow without human intervention."
        },
        {
            question: "Can Rexpt handle multiple calls at the same time?",
            answer:
                "Indeed, Rexpt supports simultaneous call handling, ensuring that businesses never miss a call and each customer receives timely, automated assistance."
        },

    ];

    const [activeIndex, setActiveIndex] = useState(0);


    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const images = [
        "/Images/user1.png",
        "/Images/user2.png",
        "/Images/user3.png",
    ];
    return (

        <>
            <div className={styles.containerBox}>
                <div className={styles.container}>
                    <div className={styles.LeftSection}>
                        <div className={styles.contentDiv}>
                            <TitleBar title="Frequently Asked Questions" marginBlock="0px 2.5rem" />
                            <p>We understand that starting something new can bring questions. Here are some of the most common inquiries about our
                                AI receptionist.</p>

                            <div className={styles.container2}>
                                {/* Images Section */}
                                <div className={styles.imageGroup}>
                                    {images.map((img, i) => (
                                        <div className={styles.avatar} key={i}>
                                            <img src={img} alt={`customer-${i}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Text Section */}
                                <div className={styles.textSection}>
                                    <h2>
                                        3 M<span className={styles.plus}>+</span>
                                    </h2>
                                    <p>Happy customer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.RightSection}>
                        <div className={styles.accordion}>
                            {faqs.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.item} ${activeIndex === index ? styles.active : ""
                                        }`}
                                >
                                    <div
                                        className={styles.titleRow}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h3 className={styles.question}>{item.question}</h3>
                                        <span className={styles.icon}>
                                            {activeIndex === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    <div
                                        className={`${styles.contentWrapper} ${activeIndex === index ? styles.open : ""
                                            }`}
                                    >
                                        <p className={styles.content}>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default FaqSection
