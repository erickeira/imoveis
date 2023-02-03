import DetalhesImovel from "../components/detalhesImovel";
import styles from './novoimovel.module.scss'
import Title from '../components/title'
import Fotos from "../components/fotos";
import { useState } from "react";
import { bairros } from "../../../utils";
import Head from "next/head";
import Button from "../components/button";

export default function Novoimovel(){
    

    const [dadosImovel, setDadosImovel] = useState({
        condicao: '',
        finalidade: '',
        tipo: '',
        bairro: '',
        rua: '',
        titulo: '',
        areaconstruida: '',
        areatotal: '',
        caracteristicas: [],
        descricao: '',
        infoadicionais: '',
        quartos: '',
        garagem: '0',
        salaestar: '0',
        salatv: '0',
        suite: '0',
        iptu: '',
        condominio: '',
        valor: '',
        fotos: [
            "/imoveis/01.jpg",
            "/imoveis/02.jpg",
            "/imoveis/03.jpg",
            "/imoveis/01.jpg"
        ]
    })

    function mudarDadosImovel(e){
        setDadosImovel({...dadosImovel, ...e})
    }
    
    return(
        <>
        <Head>
            <title>Novo Imóvel - Admin</title>
            <meta name="description" content="Publicar novo imõvel" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`${styles.container} bgAdmin`}>
            <div className={`${styles.containerDentro} containerTelaAdmin`}>
                <Title titulo={'NOVO IMÓVEL'}/>
                <DetalhesImovel dadosImovel={dadosImovel} callbackchange={e => mudarDadosImovel(e)} />
                <Fotos fotos={dadosImovel.fotos} callbackchange={e => mudarDadosImovel({fotos: e})}/>
                <div style={{width: '100%',display: 'flex', justifyContent: 'flex-end'}}>
                    <Button titulo={`Salvar`}/>
                </div>
            </div> 
        </div>
        </>
    ) 
}