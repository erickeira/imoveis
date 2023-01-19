import React, { useState} from 'react'
import styles from './horizontalfilter.module.scss'
import FormBusca from '../formBusca';


export default function HorizontalFilter(){

    return(
        <div className={styles.container}>
            <div  className={`${styles.containerImgs1} slide-container`}>
            </div>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <FormBusca horizontal/>
            </div>
        </div>
    )
}