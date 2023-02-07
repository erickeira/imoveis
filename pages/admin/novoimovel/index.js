import DetalhesImovel from "../../../components/detalhesImovel";
import styles from './novoimovel.module.scss'
import Title from '../../../components/title'
import Fotos from "../../../components/fotos";
import { useContext, useState } from "react";
import { api, bairros, baseUrl } from "../../../utils";
import Head from "next/head";
import Button from "../../../components/button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AuthContext } from "../../../context";

export default function Novoimovel(){
    const { showAlert } = useContext(AuthContext)
    const [dadosImovel, setDadosImovel] = useState({
        condicao: 'novo',
        finalidade: 'venda',
        tipo: 'apartamento',
        bairro: 'asdad',
        endereco: 'asdad',
        titulo: '',
        areaconstruida: '123',
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
        }).catch(res => {
            showAlert.warning('', res.response.data)
        })
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
                    <Button onClick={() => publicarImovel()} titulo={`Salvar`}/>
                </div>

            </div> 
        </div>
        </>
    ) 
}