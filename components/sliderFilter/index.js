import React, { useState} from 'react'
import styles from './sliderfilter.module.scss'
import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'
import { loaderImg } from '../../utils'
import Image from 'next/image'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
import FormBusca from '../formBusca';


export default function SliderFilter(){


    return(
        <div className={styles.container}>
            <div  className={`${styles.containerImgs1} slide-container`}>
            </div>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <FormBusca/>
            </div>


        </div>
    )
}