import React from "react"
import styles from './inputarea.module.scss'

export default function InputArea(props){
    const { titulo, area,size, type} = props
    return(
        <textarea placeholder={titulo} className={`${styles.input}`}/>
    )
}