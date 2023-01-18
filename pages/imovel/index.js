import Image from 'next/image';
import { useState } from 'react';
import InputTexto from '../../components/inputTexto';
import { loaderImg } from '../../utils';
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import styles from './imovel.module.scss'

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
      ,"4 Suíte(s) com a/e"
      ,"2 Sacada(s)"
      ,"2 Vaga(s) de garagem"
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
    const images = [
        {
          url: '/imovel/01.jpg',
          legenda: 'Leegenda',
        },
        {
          url: '/imovel/01.jpg',
          legenda: 'Legenda',
        },
        {
          url: '/imovel/01.jpg',
          legenda: 'Legenda',
        },
      ];
    const especificacoes = [
      "3 Quartos", 
      "1 Banheiro", 
      "60,00 m² Privativos",
      "60,00 m² de area externa",
      "1 Garagem",
      "4° Andar"
    ]
    return (
        <div className={`containerTela`}>
            <div className={`${styles.tipoFinalidadeLabel}`}>Casa térra - Venda</div>
            <div className={`${styles.containerDivisao}`}>
              <div className={`${styles.containerLadoEsquerdo}`}>
                <div className={`${styles.containerImagens}`}>
                    <div className={`${styles.containerImagemSelecionada}`}>
                      <Image src={images[imagemSelecionada].url} loader={loaderImg} fill/>
                    </div>
                </div>
                <div className={`${styles.containerDescricao}`}>
                  <div className={`${styles.label}`}>Descrição</div>
                  <div className={`${styles.descricao}`}>
                   Excelente apartamento residencial localizado na região com m² mais valorizado da cidade, entre as rua 13 de Junho e Afonso Pena, contendo 03 salas amplas, estar, jantar e TV mobiliadas, com sacada ampla, 04 suítes com armários planejados, mobiliados, com sacadas, sendo uma suíte master com closet, e banheira, cozinha planejada mobiliada, área de serviços completa com armários, quarto suíte de empregada completo com armários. Apartamento riquíssimo em armários planejados e completamente mobilhado, com salas, cozinha e quartos montados com todos os moveis, e acessório, fogão, geladeira, maquina de lavar.
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
                    R$ 4.000,00/mês
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
                      <InputTexto titulo={'Nome'}/>
                      <InputTexto titulo={'Email'}/>
                      <InputTexto titulo={'Telefone'}/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}