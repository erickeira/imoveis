import React from 'react'
import Select from 'react-select'
import styles from './sliderfilter.module.scss'
import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { loaderImg } from '../../utils'
import Image from 'next/image'

export default function SliderFilter(){

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
    const Slide = () => {
        const images = [
            "/slide/img01.jpg",
            "/slide/img02.jpg",
            "/slide/img03.jpg",
        ];
      
        return (
          <div>
              <Fade
                transitionDuration={1000}
                arrows={false}
              >
                    {
                        images.map(image => {
                            return(
                                <div className="each-slide">
                                    <Image
                                        loader={loaderImg}
                                        src={image}
                                        alt="Casa"
                                        width={1050}
                                        height={600}
                                        unoptimized
                                    />
                                </div>
                            )
                        })
                    }
                 
              </Fade>
          </div>
        );
      };

    return(
        <div className={styles.container}>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <div  className={`${styles.containerImgs1} slide-container`}>
                    <Slide/>
                </div>
                <div className={`${styles.containerBusca}`}>
                    <div className={styles.label}>FAÇA UMA BUSCA</div>
                    <Select options={finalidades || []} className={`select`} defaultValue={{ value: 'Finalidade', label: 'Finalidade' }}/>
                    <Select options={tiposDeImoveis || []} className={`select`} defaultValue={{ value: 'Tipodeimóvel', label: 'Tipo de imóvel' }}/>
                    <div className={`containerSelectLocalidade`}>
                        <Select options={estados || []} className={`selectMenor`} defaultValue={{ value: 'Estado', label: 'Estado' }}/>
                        <Select options={cidades || []} className={`selectMaior`} defaultValue={{ value: 'Cidade', label: 'Cidade' }}/>
                    </div>
                   
                    <Select options={bairros || []} className={`select`} defaultValue={{ value: 'Bairros', label: 'Bairros' }}/>
                    <div className={`botaoBuscar`}>
                        Buscar
                    </div>
                </div>

            </div>


        </div>
    )
}