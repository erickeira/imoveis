import DetalhesImovel from "../../../components/detalhesImovel";
import styles from './novoimovel.module.scss'
import Title from '../../../components/title'
import Fotos from "../../../components/fotos";
import React,{ useContext, useState } from "react";
import { api, bairros, baseUrl } from "../../../utils";
import Head from "next/head";
import Button from "../../../components/button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AuthContext } from "../../../context";
import TopoAdmin from "../../../components/topoAdmin";
import { Router, useRouter } from "next/router";

export default function Novoimovel(){
    const { showAlert } = useContext(AuthContext)
    const router = useRouter()
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
        quartos: '0',
        garagem: '0',
        salaestar: '0',
        salatv: '0',
        suite: '0',
        iptu: '',
        condominio: '',
        valor: '',
        fotos: [ ]
    })

    function mudarDadosImovel(e){
        setDadosImovel({...dadosImovel, ...e})
    }

    async function publicarImovel(){
        const formData = new FormData();
        Object.entries(dadosImovel).map(([chave, valor], index) => {
            let novovalor = valor
            if(chave == 'fotos'){
                valor.map((foto, index) => {
                    formData.append('fotos', foto.file ? foto.file : foto, `imagem${index}.jpg`)
                })
            }
            formData.append(chave, novovalor)
        })

        api.post(`/imoveis`, formData).then(res => {
            showAlert.success('Sucesso', `Imóvel publicado - #${res.data.id}`)
            router.push('/admin/imoveis')
        }).catch(res => {
            console.log(res)
            showAlert.warning('', res.response.data)
        })
    }

    console.log(dadosImovel)
    return(
        <>
        <Head>
            <title>Novo Imóvel - Admin</title>
            <meta name="description" content="Publicar novo imõvel" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopoAdmin/>
        <div className={`${styles.container} bgAdmin`}>
            <div className={`${styles.containerDentro} containerTelaAdmin`}>
            <Title titulo={'NOVO IMÓVEL'} renderRight={<Button color={'#00A3DE'} onClick={() => router.push('/admin/imoveis')} titulo={'Voltar'}/>}/>
                <DetalhesImovel dadosImovel={dadosImovel} callbackchange={e => mudarDadosImovel(e)} />
                <Fotos fotos={dadosImovel.fotos} callbackchange={e => mudarDadosImovel({fotos: e})}/>
                <div style={{width: '99%',display: 'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={() => publicarImovel()}  titulo={`Salvar`}/>
                </div>
                <div style={{height: 200}}/>
            </div> 
        </div>
        </>
    ) 
}