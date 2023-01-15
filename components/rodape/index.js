import styles from './rodape.module.scss'
import { FaWhatsapp } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'

export default function Rodape(){
    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerDentro} containerTela`}>
                <div className={`${styles.containerEndereco}`}>
                    <div className={`${styles.label}`}>Endereço</div>
                    <div className={`${styles.endereco}`}><BiMap style={{marginRight: 10}}/>Rua Tal, Jardim Qualquer - SP</div>
                    <div className={`${styles.mapa}`}>Ver no mapa</div>
                </div>
                <div className={`${styles.containerHorarios}`}>
                    <div className={`${styles.label}`}>Horários de Atendimento</div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>SEG:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 17:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>TER:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 17:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>QUA:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 17:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>QUI:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 17:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>SEX:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 17:00</div>
                    </div>

                </div>
                <div className={`${styles.containerSocial}`}>
                    <div className={`${styles.label}`}>Redes Sociais</div>
                    <div  className={styles.itens}>
                        <div className={styles.item} style={{marginBottom: 10}}>
                            <BsFacebook  size={20} color={'#3B5998'} style={{marginRight: 10}} /> 
                            fb.com/imobiliaria
                        </div>
                        <div className={styles.item}>
                            <AiFillInstagram size={23} color={'#fff'} style={{marginRight: 8}}/>
                            @imobiliaria
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}