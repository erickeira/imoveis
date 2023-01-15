import React from 'react'
import CardCorretor from '../cardCorretor'
import styles from './listcorretores.module.scss'

export default function ListCorretores(){
    return(
        <div className={`containerTela`}>
            <h3 className={styles.label}>Nossos Corretores </h3>
            <div className={`${styles.container}`} style={{marginBottom: 500}}>
                <CardCorretor foto={`img01.png`}/>
                <CardCorretor foto={`img02.png`}/>
                <CardCorretor foto={`img03.png`}/>
                <CardCorretor foto={`img03.png`}/>
            </div>
        </div>
    )
}