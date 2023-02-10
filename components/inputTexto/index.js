import React from "react"
import styles from './inputtexto.module.scss'

export default function InputTexto(props){
    const { titulo, area,size, type, style, placeholder, onChange, value, className, tipo} = props

    function exibeTipo(){
        if(tipo == 'moeda') return 'R$'
        if(tipo == 'metro') return 'm²'
        return ''
    }

    function formatarValor(value){
        if(tipo == 'moeda') return formatBRL(value)
        if(tipo == 'metro') return formatMeters(value)
        return value
    }

    function formatBRL(value) {
        return value;
    }

    const formatMeters = (value) => {
        return value;
    };
      
    return(
        <div className={`${styles.container} ${className}`} style={style}>
            <span className={`${styles.titulo}`}>{titulo}</span>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{fontSize: 14, marginRight: 5}}>{exibeTipo()}</div>
                <input type={type || 'text'} value={formatarValor(value) || ''} placeholder={placeholder || ''} onChange={e => onChange(e.target.value)} className={`${styles.input}`}/>
            </div>
        </div>
    )
}