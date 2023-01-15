import React, { useState} from 'react'
import styles from './formbusca.module.scss'
import 'react-slideshow-image/dist/styles.css';
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
export default function FormBusca(props){
    const { marginLeft } = props
    const finalidades = [
        { value: 'Selecione', label: 'Selecione' },
        { value: 'Venda', label: 'Venda' },
        { value: 'Aluguel', label: 'Aluguel' },
    ]
    
    const tiposDeImoveis = [
        { value: 'Selecione', label: 'Selecione' },
        { value: 'Apartamento', label: 'Apartamento' },
        { value: 'Casa', label: 'Casa' },
    ] 

    const estados = [
        { value: 'Selecione', label: 'Selecione' },
        { value: 'MS', label: 'MS' },
        { value: 'RJ', label: 'RJ' },
    ] 
    const cidades = [
        { value: 'Selecione', label: 'Selecione' },
        { value: 'Campo Grande', label: 'Campo Grande' },
        { value: 'Aquidauana', label: 'Aquidauana' },
    ] 
    const bairros = [
        { value: 'Selecione', label: 'Selecione' },
        { value: 'Centro', label: 'Centro' },
        { value: 'Chácara cachoeira', label: 'Chácara Cachoeira' },
    ] 
    return(
        <div className={`${styles.containerBusca}`} style={{marginLeft: marginLeft}}>
            <div className={styles.label}>BUSQUE O IMÓVEL DESEJADO</div>
                <InputSelect options={finalidades} titulo={'Finalidade'}/>
                <InputSelect options={tiposDeImoveis} titulo={'Tipo de imóvel'}/>
                <div className={`doisSelect`}>
                    <InputSelect options={estados} titulo={'Estado'} size={'90%'}/>
                    <InputSelect options={cidades} titulo={'Cidade'}/>
                </div>
                <InputSelect options={bairros} titulo={'Bairros'} isMulti/>
                <InputSlider/>
            <div className={`botaoBuscar`}>
                Buscar
            </div>
        </div>

    )
}