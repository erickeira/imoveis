import React from "react"
import styles from './inputarea.module.scss'

export default function InputArea(props){
    const { titulo, area,size, type, placeholder, className,style, onChange} = props
    return(
        <div className={`${styles.container} ${className}`}  style={{...style,width: size || '100%'}}>
            <span className={`${styles.titulo}`}>{titulo}</span>
            <textarea placeholder={placeholder || ''} onChange={(e) => onChange(e.target.value)}  className={`${styles.input}`}/>
        </div>
    )
}