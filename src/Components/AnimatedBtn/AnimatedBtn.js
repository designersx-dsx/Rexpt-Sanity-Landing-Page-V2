import React from 'react'
import styles from '../AnimatedBtn/AnimatedBtn.module.css'

const AnimatedBtn = ({ 
    text = "", 
    text2 = "", 
    logo = "", 
    shapeType = "default",   // agar pass na kare to "default" hi chalega
    textColor = "#fff" 
}) => {
    // default / alt ke base pe shape choose hoga
    const shape = shapeType === "alt" 
        ? "/Svg/shape-btn3.svg" 
        : "/Svg/shape-btn.svg";

    return (
        <div className={styles.btn}>
            <img src={shape} alt="btn-shape" className={styles.shape} />

            {text2 && logo ? (
                <div className={styles.flexContent} style={{ color: textColor }}>
                    <span>{text2}</span>
                    <img src={logo} alt="logo" className={styles.logo} />
                </div>
            ) : (
                <p style={{ color: textColor }}>{text}</p>
            )}
        </div>
    )
}

export default AnimatedBtn
