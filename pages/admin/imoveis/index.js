import DetalhesImovel from "../../../components/detalhesImovel";
import styles from './imoveis.module.scss'
import Title from '../../../components/title'
import Fotos from "../../../components/fotos";
import React,{ useContext, useEffect, useState } from "react";
import { api, bairros, baseUrl } from "../../../utils";
import Head from "next/head";
import Button from "../../../components/button";

import { AuthContext } from "../../../context";
import TopoAdmin from "../../../components/topoAdmin";
import { useRouter } from "next/router";
import CardImovelAdmin from "../../../components/carImovelAdmin";
import { HiOutlineHomeModern } from 'react-icons/hi'

export default function MeusImoveis(){
    const { showAlert } = useContext(AuthContext)
    const router = useRouter()
    const [imoveis, setImoveis] = useState([])

    useEffect(() => {
        getImoveis()
    },[])

    async function getImoveis(){
        api.get('/imoveis')
            .then(res => {
                setImoveis(res.data)
            })
            .catch(res => {
                console.log(res.response.data)
            })
    }

    async function removerImovel(id){

        api.delete(`/imoveis/${id}`)
            .then(res => {
                let novosImoveis = imoveis.filter(item => parseInt(item.id) != id)
                setImoveis(novosImoveis)
                showAlert.success('Success', `Imóvel removido #${id}!`)
                // setImoveis(res.data)
            })
            .catch(res => {
                console.log(res.response.data)
                // console.log(res.response.data)
            })
    }
    useEffect(() => {
        console.log('removeu')
    },[imoveis])

    return(
        <>
            <Head>
                <title>Meus imóveis - Admin</title>
                <meta name="description" content="Meus imóveis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopoAdmin/>
            <div className={`${styles.container} bgAdmin`}>
                <div className={`${styles.containerDentro} containerTelaAdmin`}>
                    <Title titulo={'MEUS IMÓVEIS'} renderRight={<Button color={'#00A3DE'} onClick={() => router.push('/admin/novoimovel')} titulo={'Novo Imóvel'}/>}/>
                    <div className={`${styles.containerImoveis}`}>
                        {
                            imoveis.length ? 
                            imoveis.map((imovel, index) => {
                                return(
                                    <CardImovelAdmin callbackdelete={(id) => removerImovel(id)} data={imovel}/>
                                )
                            })
                            : 
                            (<div className={`${styles.containerNenhumImovel}`}>
                                <span>Nenhum imóvel publicado</span>
                            </div>)
                        }
                    </div>
                </div> 
            </div>
        </>
    ) 
}