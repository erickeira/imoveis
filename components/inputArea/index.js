import React from "react"
import styles from './inputarea.module.scss'

export default function InputArea(props){
    const { titulo, area,size, type, placeholder} = props
    return(
        <div className={`${styles.container}`}  style={{width: size || '100%'}}>
            <span className={`${styles.titulo}`}>{titulo}</span>
            <textarea placeholder={placeholder || ''} className={`${styles.input}`}/>
        </div>
    )
}