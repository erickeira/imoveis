import React from "react";
import Head from "next/head";
import styles from './contato.module.scss'
import InputTexto from "../../components/inputTexto";
import InputArea from "../../components/inputArea";
import { loaderImg } from "../../utils";
import Image from "next/image";
import { BsMailbox } from 'react-icons/bs'

export default function Contato(){
    return(
        <>
            <Head>
                <title>Ferreira Gomes - Contato</title>
                <meta name="description" content="Ferreira Gomes Imoveis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                      <InputTexto titulo={'Nome'} type={`text`}/>
                      <InputTexto titulo={'Email'}  type={`email`}/>
                      <InputTexto titulo={'Telefone'}  type={`tel`}/>
                      <InputArea titulo={'Mensagem'}/>
                      <div className={`${styles.containerBotaoMensagem}`}>
                        <div className={`${styles.botaoMensagem}`}>Enviar mensagem</div>
                      </div>
                    </div>
                </div>
            </body>
        </>
    )
}