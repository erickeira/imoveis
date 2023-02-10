import React from "react"
import styles from './inputtexto.module.scss'

export default function InputTexto(props){
    const { titulo, area,size, type, style, placeholder, onChange, value, className} = props
    return(
        <div className={`${styles.container} ${className}`} style={style}>
            <span className={`${styles.titulo}`}>{titulo}</span>
            <input type={type || 'text'} value={value || ''} placeholder={placeholder || ''} onChange={e => onChange(e.target.value)} className={`${styles.input}`}/>
        </div>
    )
}