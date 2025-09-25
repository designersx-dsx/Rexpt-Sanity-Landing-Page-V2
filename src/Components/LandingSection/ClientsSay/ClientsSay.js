import React, { useState, useEffect } from "react";
import styles from "../ClientsSay/ClientsSay.module.css";
import TitleBar from "../../TitleBar/TitleBar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimatedBtn from "../../AnimatedBtn/AnimatedBtn";

const ClientsSay = () => {
    const slides = [
        {
            id: 1,
            text: `“As a law firm, we need to ensure every call is handled with care and confidentiality. The rexpt AI receptionist has been perfect for our needs, accurately routing calls and capturing important information.”`,
            author: "Michael Chen, Founder of Innovate Solutions",
            img: "/Images/clientslide1.png",
            bgColor: "#000",
            textColor: "#ffffffff"
        },
        {
            id: 2,
            text: `“Using rexpt has saved us hours of manual work. It feels like having a professional receptionist on duty 24/7.”`,
            author: "Sarah Lee, CEO of FutureTech",
            img: "/Images/clientslide2.png",
            bgColor: "#567E32",
            textColor: "#ffffffff"
        },
        {
            id: 3,
            text: `“This platform is game-changing! We can finally focus on clients without worrying about missed calls.”`,
            author: "Mia Wilson, Partner at LegalBridge",
            img: "/Images/clientslide3.png",
            bgColor: " #F3C740",
            textColor: "#000000"
        },
        {
            id: 4,
            text: `“As a law firm, we need to ensure every call is handled with care and confidentiality. The rexpt AI receptionist has been perfect for our needs, accurately routing calls and capturing important information.”`,
            author: "Michael Chen, Founder of Innovate Solutions",
         img: "/Images/clientslide2.png",
            bgColor: "#6524EB",
            textColor: "#ffffffff"
        },
        {
            id: 5,
            text: `“As a law firm, we need to ensure every call is handled with care and confidentiality. The rexpt AI receptionist has been perfect for our needs, accurately routing calls and capturing important information.”`,
            author: "Michael Chen, Founder of Innovate Solutions",
              img: "/Images/clientslide3.png",
            bgColor: "#EEE6FF",
            textColor: "#24252C"
        },
    ];

    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setPrev(current);
        setCurrent((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setPrev(current);
        setCurrent((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Autoplay
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [isPaused, current]);

    // Clear previous after fade-out duration
    useEffect(() => {
        if (prev !== null) {
            const timeout = setTimeout(() => setPrev(null), 600);
            return () => clearTimeout(timeout);
        }
    }, [prev]);

    return (
        <div
            className={styles.containerBox}

        >
            <div className={styles.TitleBarDiv}>
                <TitleBar
                    subTitle="Our Impact,"
                    spanText="Your Advantage"
                    title="Transforming Business Communications"
                />
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.sliderContainer} onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    {slides.map((slide, index) => {
                        let position = styles.hidden;
                        if (index === current) position = styles.active;
                        else if (index === prev) position = styles.fadeOut; // fade-out for previous
                        else if (index === (current + 1) % slides.length) position = styles.next;
                        else if (index === (current + 2) % slides.length) position = styles.next2;

                        return (
                            <div
                                key={slide.id}
                                className={`${styles.slide} ${position}`}
                                style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
                            >
                                <div className={styles.textSection}>
                                    <p>{slide.text}</p>
                                    <span>{slide.author}</span>
                                </div>
                                <div className={styles.imageSection}>
                                    <img src={slide.img} alt={slide.author} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.controls}>
                    <div>
                        <AnimatedBtn text2="Join" logo="/Svg/rexpt-logo2.svg" />
                    </div>
                    <div className={styles.BothBtn}>
                        {/* <button onClick={prevSlide}>
                            <FaArrowLeft />
                        </button> */}
                        <button onClick={nextSlide}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsSay;
