import React from 'react'
import styles from '../AnimatedBtn/AnimatedBtn.module.css'

const AnimatedBtn = ({ text = "" }) => {
    return (

        <div className={styles.btn}>
            <img src="Svg/shape-btn.svg" alt="btn-shape" />
            <p>
                {text}
            </p>
        </div>
    )
}

export default AnimatedBtn
