import React from 'react'
import styles from '../TitleBar/TitleBar.module.css'

const TitleBar = ({ subTitle, spanText, title ,marginBlock}) => {
    return (
        <div>
            <div className={styles.TopSection} style={{ marginBlock: marginBlock }}>
                <div className={styles.LeftBar}>
                    <h5 className={styles.subTitle}>
                        {subTitle} <span className={styles.spanText}>{spanText}</span>
                    </h5>
                    <h2 className={styles.Title}>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default TitleBar
