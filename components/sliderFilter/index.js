import React, { useState} from 'react'
import styles from './sliderfilter.module.scss'
import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { loaderImg } from '../../utils'
import Image from 'next/image'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
import FormBusca from '../formBusca';


export default function SliderFilter(){


    const Slide = () => {
        const images = [
            "/slide/img01.jpg"
            // "/slide/img02.jpg",
            // "/slide/img03.jpg",
        ];
      
        return (
            <Fade
                transitionDuration={1000}
                arrows={false}
            >
                {
                    images.map(image => {
                        return(
                            <div className="each-slide">
                                <div className={styles.containerImagemSlide}>
                                    <Image
                                        loader={loaderImg}
                                        src={image}
                                        alt="Casa"
                                        width={1400}
                                        height={600}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                
            </Fade>
        );
      };

    return(
        <div className={styles.container}>
            <div  className={`${styles.containerImgs1} slide-container`}>
                {/* <Slide/> */}
            </div>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <FormBusca/>
            </div>


        </div>
    )
}