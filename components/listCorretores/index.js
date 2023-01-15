import React from 'react'
import CardCorretor from '../cardCorretor'
import styles from './listcorretores.module.scss'

export default function ListCorretores(){
    return(
        <div className={`containerTela`}>
            <h3 className={styles.label}>Nossos Corretores </h3>
            <div className={`${styles.container}`} style={{marginBottom: 80}}>
                <CardCorretor foto={`img01.png`} nome={'Erick Almeida'}/>
                <CardCorretor foto={`img02.png`} nome={'Alisson Nogueira'}/>
                <CardCorretor foto={`img03.png`} nome={'Fabricia Christina'}/>
                <CardCorretor foto={`img04.png`} nome={'Bruno Alcantara'}/>
            </div>
        </div>
    )
}