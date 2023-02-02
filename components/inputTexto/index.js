import React from "react"
import styles from './inputtexto.module.scss'

export default function InputTexto(props){
    const { titulo, area,size, type, style, placeholder} = props
    return(
        <div className={`${styles.container}`} style={style}>
            <span className={`${styles.titulo}`}>{titulo}</span>
            <input type={type || 'text'} placeholder={placeholder || ''}  className={`${styles.input}`}/>
        </div>
    )
}