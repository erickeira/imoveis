import React, { useState } from "react";
import Head from "next/head";
import styles from './contato.module.scss'
import InputTexto from "../../components/inputTexto";
import InputArea from "../../components/inputArea";
import { loaderImg } from "../../utils";
import Image from "next/image";
import { BsMailbox } from 'react-icons/bs'
import Topo from "../../components/topo";
import Rodape from "../../components/rodape";

export default function Contato(){
    const [formularioContato, setFormularioContato] = useState({
        nome: '',
        email: '',
        telefone:'',
        mensagem: ''
    })

    function mudarFormulario(e){
        setFormularioContato({...formularioContato, ...e})
    }
    return(
        <>
            <Head>
                <title>Ferreira Gomes - Contato</title>
                <meta name="description" content="Ferreira Gomes Imoveis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Topo/>
            <body className={`${styles.container} containerTela`}>
                <div className={`${styles.containerImagem}`} >
                    <BsMailbox size={120} color={`#d1d1d1`}/>
                    {/* <Image
                        src="/imovel/01.jpg"
                        fill
                        loader={loaderImg}
                        className={`${styles.imagem}`} 
                    /> */}
                </div>
                <div className={`${styles.containerFormulario}`}>
                    <div className={`${styles.titulo}`}>DEIXEI SUA MENSAGEM, LOGO ENTRAREMOS EM CONTATO</div>
                    <div className={`${styles.containerInputs}`}>
                      <InputTexto titulo={'Nome'} type={`text`} value={formularioContato.nome} onChange={(e) => mudarFormulario({nome: e})} className={`${styles.input}`}/>
                      <InputTexto titulo={'Email'}  type={`email`} value={formularioContato.email} onChange={(e) => mudarFormulario({email: e})}  className={`${styles.input}`}/>
                      <InputTexto titulo={'Telefone'}  type={`tel`} value={formularioContato.telefone} onChange={(e) => mudarFormulario({telefone: e})}  className={`${styles.input}`}/>
                      <InputArea titulo={'Mensagem'} size={'98%'}value={formularioContato.mensagem}  onChange={(e) => mudarFormulario({mensagem: e})}  style={{marginTop: 10}}/>
                      <div className={`${styles.containerBotaoMensagem}`}>
                        <div className={`${styles.botaoMensagem}`}>Enviar mensagem</div>
                      </div>
                    </div>
                </div>
            </body>
            <Rodape/>
        </>
    )
}