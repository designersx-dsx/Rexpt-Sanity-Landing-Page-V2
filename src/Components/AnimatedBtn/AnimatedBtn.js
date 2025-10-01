import React from 'react'
import styles from '../AnimatedBtn/AnimatedBtn.module.css'

const AnimatedBtn = ({
    text = "",
    text2 = "",
    logo = "",
    shapeType = "default",
    textColor = "#fff",
    fontFamily = '',
}) => {

    const shape = shapeType === "alt"
        ? "/Svg/shape-btn3.svg"
        : "/Svg/shape-btn.svg";

    // agar text ke andar "FREE" hai to split karke span add karenge
    const renderText = () => {
        if (text.includes("FREE")) {
            const parts = text.split("FREE");
            return (
                <>
                    {parts[0]}
                    <span style={{ fontFamily: "Arbotek bold" }}>FREE</span>
                    {parts[1]}
                </>
            );
        }
        return text;
    };

    return (
        <div className={styles.btn}>
            <img src={shape} alt="btn-shape" className={styles.shape} />

            {text2 && logo ? (
                <div className={styles.flexContent} style={{ color: textColor }}>
                    <span>{text2}</span>
                    <img src={logo} alt="logo" className={styles.logo} />
                </div>
            ) : (
                <p style={{ color: textColor, fontFamily }}>{renderText()}</p>
            )}
        </div>
    )
}

export default AnimatedBtn
