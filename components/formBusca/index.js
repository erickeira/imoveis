import React, { useState} from 'react'
import styles from './formbusca.module.scss'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
export default function FormBusca(props){
    const { marginLeft, horizontal, bairros, finalidades, tiposdeimovel, selecionados, onChange} = props

    return(
        <div className={`${horizontal ? styles.containerBuscaHorizontal : styles.containerBusca}`} style={{marginLeft: marginLeft}}>
                {!horizontal ? <div className={styles.label}>BUSQUE O IMÓVEL DESEJADO</div> : null}
                <div className={styles.inputsHorizontais}>
                    <div className={styles.inputHorizontal}>
                        <InputSelect className={`${styles.select}`} onChange={e => onChange({finalidade : e.value})} selecionado={selecionados.finalidade} options={finalidades.map(item => { return {value: item, label: item}})}    titulo={'Finalidade'}/>
                        <InputSelect className={`${styles.select}`} onChange={e => onChange({tipodeimovel : e.value})} selecionado={selecionados.tipodeimovel} options={tiposdeimovel.map(item => { return {value: item, label: item}})} titulo={'Tipo de imóvel'}/>
                    </div>
                    <div className={styles.inputHorizontal}>
                        <InputSelect className={`${styles.select}`} onChange={e => onChange({bairros : e.map(e => {return e.value})})} selecionado={selecionados.bairros} options={bairros.map(item => { return {value: item, label: item}})} titulo={'Bairros'} isMulti/>
                        <InputSlider notitle/>
                    </div>
                    <div className={styles.botaoBuscar}>
                        {horizontal ? 'Filtrar' :  'Buscar' }
                    </div>
                </div>

        </div>

    )
}