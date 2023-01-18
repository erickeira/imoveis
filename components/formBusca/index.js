import React, { useState} from 'react'
import styles from './formbusca.module.scss'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
export default function FormBusca(props){
    const { marginLeft } = props
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
        <div className={`${styles.containerBusca}`} style={{marginLeft: marginLeft}}>
            <div className={styles.label}>BUSQUE O IMÓVEL DESEJADO</div>
                <InputSelect options={finalidades} titulo={'Finalidade'}/>
                <InputSelect options={tiposDeImoveis} titulo={'Tipo de imóvel'}/>
                <InputSelect options={bairros} titulo={'Bairros'} isMulti/>
                <InputSlider/>
            <div className={`botaoBuscar`}>
                Buscar
            </div>
        </div>

    )
}