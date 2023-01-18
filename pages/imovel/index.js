import React from "react";
import Image from 'next/image';
import { useState } from 'react';
import InputTexto from '../../components/inputTexto';
import { loaderImg } from '../../utils';
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import styles from './imovel.module.scss'
import Head from 'next/head';
import InputArea from "../../components/inputArea";
import ImageGallery from 'react-image-gallery';

export default function Imovel(){
    const [imagemSelecionada, setImagemSelecionada] = useState(0)

  
    const caracteristicas = [
      "Água"
      ,"Asfalto"
      ,"Calçada"
      ,"Esgoto"
      ,"Muro"
      ,"Sala de estar"
      ,"Sala de jantar"
      ,"Sala de TV"
      ,"Academia"
      ,"Alarme"
      ,"Área de lazer"
      ,"Área de serviço"
      ,"Brinquedoteca"
      ,"Câmeras de segurança"
      ,"Churrasqueira"
      ,"Closet"
      ,"Cozinha planejada"
      ,"Guarita"
      ,"Interfone"
      ,"Lavabo"
      ,"Lavanderia"
      ,"Piscina"
      ,"Portaria"
      ,"Quiosque"
      ,"Recepção"
      ,"Salão de Festas"
      ,"Salão de Jogos"
      ,"WC de serviço"
    ]
    // const images = [
    //     {
    //       url: '/imovel/01.jpg',
    //       legenda: 'Leegenda',
    //     },
    //     {
    //       url: '/imovel/01.jpg',
    //       legenda: 'Legenda',
    //     },
    //     {
    //       url: '/imovel/01.jpg',
    //       legenda: 'Legenda',
    //     },
    //   ];
    const especificacoes = [
      "3 Quartos", 
      "1 Banheiro", 
      "60,00 m² Privativos",
      "60,00 m² de area externa",
      "1 Garagem",
      "4° Andar"
    ]

    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
    return (
        <div className={`containerTela`}>
            <Head>
              <title>Casa térra - Venda</title>
              <meta name="description" content="Ferreira Gomes Imoveis" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${styles.tipoFinalidadeLabel}`}>Casa térra - Venda</div>
            <div className={`${styles.containerDivisao}`}>
              <div className={`${styles.containerLadoEsquerdo}`}>
                <div className={`${styles.containerImagens}`}>
                    <div className={`${styles.containerImagemSelecionada}`}>
                      <ImageGallery items={images} />;
                      {/* <Image src={images[imagemSelecionada].url} loader={loaderImg} fill/> */}
                    </div>
                </div>
                <div className={`${styles.containerDescricao}`}>
                  <div className={`${styles.label}`}>Descrição</div>
                  <div className={`${styles.descricao}`}>
                   Excelente apartamento residencial localizado na região com m² mais valorizado da cidade, entre as rua 13 de Junho e Afonso Pena, contendo 03 salas amplas, estar, jantar e TV mobiliadas, com sacada ampla, 04 suítes com armários planejados, mobiliados, com sacadas, sendo uma suíte master com closet, e banheira, cozinha planejada mobiliada, área de serviços completa com armários, quarto suíte de empregada completo com armários. Apartamento riquíssimo em armários planejados e completamente mobilhado, com salas, cozinha e quartos montados com todos os moveis, e acessório, fogão, geladeira, maquina de lavar.
                  </div>
                </div>
                <div className={`${styles.containerDescricao}`}>
                  <div className={`${styles.label}`}>Informações adicionais</div>
                  <div className={`${styles.descricao}`}>
                    Mais informações
                  </div>
                </div>
                <div className={`${styles.containerEspecificacoes}`}>
                  <div className={`${styles.label}`}>Especificações</div>
                  <div className={`${styles.especificacoes}`}>
                    {
                      especificacoes.map((item, index) => {
                        return(
                          <div className={`${styles.especificacao}`}>{item}</div>
                        )
                      })
                    }
                  </div>
                </div>

                <div className={`${styles.containerMapa}`}>
                  <div className={`${styles.label}`}>Localização no mapa</div>
                  <iframe className={`${styles.mapa}`} src="https://maps.google.com/maps?q=Centro%20-%20Campo%20Grande&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                  </iframe>
                </div>


              </div>
              <div className={`${styles.containerLadoDireito}`}>

                <div className={`${styles.containerCodSociais}`}>
                  <div className={`${styles.labelCod}`}>
                    CÓD: 123
                  </div>
                  <div className={`${styles.containerSociais}`}>
                    <BsFacebook  size={25} color={'#3B5998'} style={{marginRight: 15}} />
                    <BsWhatsapp   size={25} color='#1BD741'/>
                  </div>
                </div>
                <div className={`${styles.containerValor}`}>
                    <div className={`${styles.valor}`}>R$ 4.000,00/mês</div>
                    <div className={`${styles.infos}`}>
                      <div className={`${styles.info}`}>IPTU: R$  1.000,00</div>
                      <div className={`${styles.info}`}>Condomínio : R$ 500,00</div>
                    </div>

                </div>
                <div className={`${styles.containerEndereco}`}>
                  <BiMap style={{marginRight: 10}}/> Centro - Campo Grande
                </div>

                <div className={`${styles.containerCaracteristicas}`}>
                    {
                      caracteristicas.map((item, index) => {
                        return(
                          <div key={index} className={`${styles.caracteristica}`}>{` • ${item}`}</div>
                        )
                      })
                    }
                </div>

                <div className={`${styles.containerFormulario}`}>
                    <div className={`${styles.titulo}`}>ENTRAMOS EM CONTATO</div>
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
              </div>
            </div>
        </div>
    );
}