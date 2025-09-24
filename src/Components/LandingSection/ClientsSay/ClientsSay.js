import React from 'react'
import styles from '../ClientsSay/ClientsSay.module.css'
import TitleBar from '../../TitleBar/TitleBar'
const ClientsSay = () => {
    return (
        <>
            <div className={styles.containerBox}>
                <div className={styles.TitleBarDiv}>
                    <TitleBar
                        subTitle="Our Impact,"
                        spanText="Your Advantage"
                        title="Transforming Business Communications"
                    />
                </div>
            </div>
        </>
    )
}

export default ClientsSay
