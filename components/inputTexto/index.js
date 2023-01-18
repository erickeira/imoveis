import React from "react"
import styles from './inputtexto.module.scss'

export default function InputTexto(props){
    const { titulo, area,size} = props
    return(
        <input type={'text'} placeholder={titulo} className={`${styles.input}`}/>
    )
}