import React, { useState} from 'react'
import styles from './formbusca.module.scss'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
export default function FormBusca(props){
    const { marginLeft, horizontal } = props
    const finalidades = [
        { value: 'Todas', label: 'Todas' },
        { value: 'Venda', label: 'Venda' },
        { value: 'Aluguel', label: 'Aluguel' },
    ]
    
    const tiposDeImoveis = [
        { value: 'Todos', label: 'Todos' },
        { value: 'Apartamento', label: 'Apartamento' },
        { value: 'Casa', label: 'Casa' },
    ] 
    const bairros = [
        { value: 'Todos', label: 'Todos' },
        { value: 'Centro', label: 'Centro' },
        { value: 'Chácara cachoeira', label: 'Chácara Cachoeira' },
    ] 
    return(
        <div className={`${horizontal ? styles.containerBuscaHorizontal : styles.containerBusca}`} style={{marginLeft: marginLeft}}>
                {!horizontal ? <div className={styles.label}>BUSQUE O IMÓVEL DESEJADO</div> : null}
                <div className={styles.inputsHorizontais}>
                    <div className={styles.inputHorizontal}>
                        <InputSelect options={finalidades} titulo={'Finalidade'}/>
                        <InputSelect options={tiposDeImoveis} titulo={'Tipo de imóvel'}/>
                    </div>
                    <div className={styles.inputHorizontal}>
                        <InputSelect options={bairros} titulo={'Bairros'} isMulti/>
                        <InputSlider notitle/>
                    </div>
                    <div className={styles.botaoBuscar}>
                        {horizontal ? 'Filtrar' :  'Buscar' }
                    </div>
                </div>

        </div>

    )
}