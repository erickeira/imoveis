import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { api, primeiraLetraMaiuscula } from "../../utils";
import CardImovel from "../cardImovel";
import FormBusca from "../formBusca";
import Loader from "../loader";
import styles from './listimoveis.module.scss'

export default function ListImoveis(props){
    const { titulo } = props
    const { showAlert, isLogado } = useContext(AuthContext)
    const router = useRouter()
    const [imoveis, setImoveis] = useState([])
    const [imoveisFiltrados, setImoveisFiltrados] = useState([])
    const [loadingImoveis, setLoadingImoveis] = useState(true)
    const [finalidades, setFinalidades] = useState([])
    const [tiposdeimovel, setTiposDeImovel] = useState([])
    const [bairros, setBairros] = useState([])
    const [dadosFiltro, setDadosFiltro] = useState({
        finalidade: 'Todos',
        tipo: 'Todos',
        bairros: ''
    })
    const temFiltros =  Object.entries(dadosFiltro).some(([chave, valor], index) => valor && valor != 'Todos' && valor != 'Todas')
   
    useEffect(() => {
        getImoveis()
        if(props.titulo && (props.titulo == 'venda' || props.titulo == 'aluguel')){
            console.log(props.titulo)
            let novosFiltros = {
                finalidade: primeiraLetraMaiuscula(props.titulo),
                tipo: 'Todos',
                bairros: ''
            }
            setDadosFiltro(novosFiltros)
            filtrarImoveis(novosFiltros)
        }
    },[])

    useEffect(() => {
        GetDadosSelects()
    },[imoveis])

    async function getImoveis(){
        setLoadingImoveis(true)
        api.get('/imoveis')
            .then(res => {
                setImoveis(res.data)
                setLoadingImoveis(false)
            })
            .catch(res => {
                console.log(res.response.data)
            })
    }

    function mudarFiltro(e){
        setDadosFiltro({...dadosFiltro, ...e})
    }
    
    function limparFiltros(){
        let novosFiltros = {
            finalidade: 'Todos',
            tipo: 'Todos',
            bairros: ''
        }
        setDadosFiltro(novosFiltros)
        filtrarImoveis(novosFiltros)
    }

    function filtrarImoveis(filtros){
        setLoadingImoveis(true)
        let novosImoveis = imoveis
        Object.entries(filtros || dadosFiltro).map(([chave, valor], index) => {
            if(valor && valor != 'Todos' && valor != 'Todas'){
                novosImoveis = novosImoveis.filter(imovel => imovel[chave] == valor)} 
        })
        setImoveisFiltrados(novosImoveis)
        setLoadingImoveis(false)
    }
    function HorizontalFilter(){
        return(
            <div className={styles.containerFilter}>
                <div  className={`${styles.containerImgs1} slide-container`}>
                </div>
                <div className={`containerTela  ${styles.containerDentroFilter}`}>
                    <FormBusca 
                        horizontal 
                        finalidades={finalidades} 
                        bairros={bairros}
                        tiposdeimovel={tiposdeimovel}
                        selecionados={dadosFiltro}
                        onChange={(e) => mudarFiltro(e)}
                    />
                </div>
            </div>
        )
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

    return(
        <>
        <HorizontalFilter/>
        <div className={`containerTela`} >
            <h3 className={styles.label}>Imóveis em {titulo} </h3>
            <div className={`${styles.container}`} style={{marginBottom: 50}}>
                {
                                
                    imoveisFiltrados.length ? 
                    imoveisFiltrados.map((imovel, index) => {
                        return(
                            <CardImovel imagem={``}/>
                        )
                    })
                    : 
                    (
                        imoveis.length ? 
                        imoveis.map((imovel, index) => {
                            return(
                                <CardImovel imagem={``}/>
                            )
                        })
                        : 
                        (
                            loadingImoveis ? 
                            <div className={`${styles.containerNenhumImovel}`}>
                                <Loader/>
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
        </>
    )
}