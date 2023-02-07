import React, { useState} from 'react'
import styles from './formbusca.module.scss'
import InputSelect from '../inputSelect'
import InputSlider from '../inputSlider'
import { bairros, finalidades, tiposdeimovel } from '../../utils'
export default function FormBusca(props){
    const { marginLeft, horizontal } = props
    const [ dadosBusca, setDadosBusca] = useState({
        finalidade: '',
        tipodeimovel: '',
        bairros: [],
        valode: '',
        valorate: ''
    })

    function mudarDadosBusca(e){
        console.log(e)
        setDadosBusca({...dadosBusca, ...e})
    }


    return(
        <div className={`${horizontal ? styles.containerBuscaHorizontal : styles.containerBusca}`} style={{marginLeft: marginLeft}}>
                {!horizontal ? <div className={styles.label}>BUSQUE O IMÓVEL DESEJADO</div> : null}
                <div className={styles.inputsHorizontais}>
                    <div className={styles.inputHorizontal}>
                        <InputSelect size={'90%'} onChange={e => mudarDadosBusca({finalidade : e.value})} selecionado={dadosBusca.finalidade} options={finalidades.map(item => { return {value: item, label: item}})}    titulo={'Finalidade'}/>
                        <InputSelect size={'90%'} onChange={e => mudarDadosBusca({tipodeimovel : e.value})} selecionado={dadosBusca.tipodeimovel} options={tiposdeimovel.map(item => { return {value: item, label: item}})} titulo={'Tipo de imóvel'}/>
                    </div>
                    <div className={styles.inputHorizontal}>
                        <InputSelect size={'90%'} onChange={e => mudarDadosBusca({bairros : e.map(item => {return e.value})})} selecionado={dadosBusca.finalidade} options={bairros.map(item => { return {value: item, label: item}})} titulo={'Bairros'} isMulti/>
                        <InputSlider notitle/>
                    </div>
                    <div className={styles.botaoBuscar}>
                        {horizontal ? 'Filtrar' :  'Buscar' }
                    </div>
                </div>

        </div>

    )
}