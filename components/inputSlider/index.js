import React, { useState} from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import styles from './inputslider.module.scss'

export default function InputSlider(){
    const [value, setValue] = useState([0, 1000]);
    function valuetext(value) {
        return `${value}°C`;
    }
    return(
        <div className={`${styles.containerSlider}`}>
            <div className={`${styles.titulo}`}>Valor</div>
            <Slider
                value={value}
                onChange={(e, values) => setValue(values)}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                getAriaValueText={valuetext}
                disableSwap
                className={`${styles.slider}`}
                color="secondary"
            />
            <div className={`${styles.containerLabel}`}>
                <span>R$ {value[0]},00</span>
                <span>R$ {value[1]},00</span>
            </div>
        </div>
    )
}