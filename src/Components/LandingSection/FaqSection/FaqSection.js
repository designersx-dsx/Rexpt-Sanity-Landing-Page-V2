import React, { useState } from 'react'
import styles from "../FaqSection/FaqSection.module.css"

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
    return (
        <>
            <div className={styles.containerBox}>
                <div className={styles.container}>
                    <div className={styles.LeftSection}>
                        <h1>Left</h1>
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
