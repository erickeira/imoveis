import DetalhesImovel from "../../../components/detalhesImovel";
import styles from './imoveis.module.scss'
import Title from '../../../components/title'
import Fotos from "../../../components/fotos";
import React,{ useContext, useEffect, useState } from "react";
import { api, baseUrl} from "../../../utils";
import Head from "next/head";
import Button from "../../../components/button";

import { AuthContext } from "../../../context";
import TopoAdmin from "../../../components/topoAdmin";
import { useRouter } from "next/router";
import CardImovelAdmin from "../../../components/carImovelAdmin";
import { HiOutlineHomeModern } from 'react-icons/hi'
import InputSelect from "../../../components/inputSelect";
import Loader from "../../../components/loader";

export default function MeusImoveis(){
    const { showAlert, isLogado } = useContext(AuthContext)
    const router = useRouter()
    const [imoveis, setImoveis] = useState([])
    const [imoveisFiltrados, setImoveisFiltrados] = useState([])
    const [loadingImoveis, setLoadinImoveis] = useState(true)
    const [finalidades, setFinalidades] = useState([])
    const [tiposdeimovel, setTiposDeImovel] = useState([])
    const [bairros, setBairros] = useState([])
    const [dadosFiltro, setDadosFiltro] = useState({
        finalidade: 'Todos',
        tipo: 'Todos',
        bairro: 'Todos'
    })
    const temFiltros =  Object.entries(dadosFiltro).some(([chave, valor], index) => valor && valor != 'Todos' && valor != 'Todas')
    
    useEffect(() => {
        if(!isLogado) return () =>{
            router.push('/admin')
        } 
        getImoveis()
        GetDadosSelects()
    },[])

    useEffect(() => {
        GetDadosSelects()
    },[imoveis])

    async function getImoveis(){
        setLoadinImoveis(true)
        api.get('/imoveis')
            .then(res => {
                setImoveis(res.data)
                setLoadinImoveis(false)
            })
            .catch(res => {
                console.log(res.response.data)
            })
    }

    async function removerImovel(id){
        setLoadinImoveis(true)
        api.delete(`/imoveis/${id}`)
            .then(res => {
                let novosImoveis = imoveis.filter(item => parseInt(item.id) != id)
                setImoveis(novosImoveis)
                setImoveisFiltrados(novosImoveis)
                setDadosFiltro({
                    finalidade: 'Todos',
                    tipo: 'Todos',
                    bairro: 'Todos'
                })
                showAlert.success('Success', `Imóvel removido #${id}!`)
                // setImoveis(res.data)
            })
            .catch(res => {
                console.log(res.response.data)
                // console.log(res.response.data)
            })
        setLoadinImoveis(false)
    }

    function mudarFiltro(e){
        setDadosFiltro({...dadosFiltro, ...e})
    }
    
    function limparFiltros(){
        let novosFiltros = {
            finalidade: 'Todos',
            tipo: 'Todos',
            bairro: 'Todos'
        }
        setDadosFiltro(novosFiltros)
        filtrarImoveis(novosFiltros)
    }

    function filtrarImoveis(filtros){
        setLoadinImoveis(true)
        let novosImoveis = imoveis
        Object.entries(filtros || dadosFiltro).map(([chave, valor], index) => {
            if(valor && valor != 'Todos' && valor != 'Todas'){
                novosImoveis = novosImoveis.filter(imovel => imovel[chave] == valor)} 
        })
        setImoveisFiltrados(novosImoveis)
        setLoadinImoveis(false)
    }

    async function GetDadosSelects(){
        let novasFinalidades = ['Todas']
        let novosTipos = ['Todos']
        let novosBairros = ['Todos']
        imoveis.map(imovel => {
            if(!novasFinalidades.includes(imovel.finalidade)) novasFinalidades.push(imovel.finalidade)
            if(!novosTipos.includes(imovel.tipo)) novosTipos.push(imovel.tipo)
            if(!novosBairros.includes(imovel.bairro)) novosBairros.push(imovel.bairro)
        })
        setFinalidades(novasFinalidades)
        setTiposDeImovel(novosTipos)
        setBairros(novosBairros)
    }

    if(!isLogado) return null
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
                    <div className={`${styles.containerFiltroImoveis}`}>
                        <div className={`${styles.containerFiltro}`}>
                            <div className={`${styles.containerTituloFiltro}`}>
                                <div className={`${styles.titulo}`}>Filtrar imóveis</div>
                               { temFiltros ? <div onClick={() => limparFiltros()} className={`${styles.limpar}`}>Limpar</div> : null}
                            </div>
                            <InputSelect 
                                onChange={e => mudarFiltro({finalidade: e.value})} 
                                titulo={'Finalidade'} 
                                options={finalidades.map(item => { return {value: item, label: item}})} 
                                style={{borderColor: '#fff'}} 
                                // size={230}
                                selecionado={dadosFiltro?.finalidade}
                            />
                            <InputSelect 
                                onChange={e => mudarFiltro({tipo: e.value})} 
                                titulo={'Tipo'} 
                                options={tiposdeimovel.map(item => { return {value: item, label: item}})} 
                                style={{borderColor: '#fff'}} 
                                // size={230}
                                selecionado={dadosFiltro?.tipo}
                            />
                            <InputSelect 
                                onChange={e => mudarFiltro({bairro: e.value})} 
                                titulo={'Bairro'} 
                                options={bairros.map(item => { return {value: item, label: item}})} 
                                style={{borderColor: '#fff'}} 
                                // size={230}
                                selecionado={dadosFiltro?.bairro}
                            />
                             <Button onClick={() => filtrarImoveis()} color={'#00A3DE'} size={'100%'} titulo={`Filtrar`}/>
                        </div >
                        <div className={`${styles.containerImoveis}`}>
                            {
                                
                                    imoveisFiltrados.length ? 
                                    imoveisFiltrados.map((imovel, index) => {
                                        return(
                                            <CardImovelAdmin callbackdelete={(id) => removerImovel(id)} data={imovel}/>
                                        )
                                    })
                                    : 
                                    (
                                        imoveis.length ? 
                                        imoveis.map((imovel, index) => {
                                            return(
                                                <CardImovelAdmin callbackdelete={(id) => removerImovel(id)} data={imovel}/>
                                            )
                                        })
                                        : 
                                        (
                                            loadingImoveis ? 
                                            <div className={`${styles.containerNenhumImovel}`}>
                                                <Loader />
                                            </div>

                                            :
                                            <div className={`${styles.containerNenhumImovel}`}>
                                                <span>Nenhum imóvel publicado</span>
                                            </div>
                                        )
                                    )
                                
                            }
                            

                            
                        </div>
                    </div>

                </div> 
            </div>
        </>
    ) 
}