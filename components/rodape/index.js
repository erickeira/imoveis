import styles from './rodape.module.scss'
import { FaWhatsapp } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function Rodape(){
    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerDentro} containerTela`}>
                <div className={`${styles.containerContato}`}>
                    <div className={`${styles.label}`}>Contato</div>
                    <div className={`${styles.info}`}><BiMap style={{marginRight: 10}}/>Rua Piauí, 171 - Itanhangá Park - Campo Grande/MS</div>
                    <Link href="https://goo.gl/maps/PXx3EkSKK2pTB8888" className={`${styles.mapa}`}>Ver no mapa</Link>
                    <Link href="mailto:falecom@ferreiragomesimoveis.com.br" className={`${styles.info}`}><FiMail style={{marginRight: 10}}/>falecom@ferreiragomesimoveis.com.br</Link>
                    <Link href="tel:6730456164" className={`${styles.info}`}><BsTelephone style={{marginRight: 10}}/>(67) 3045-6164</Link>
                    <Link href="https://api.whatsapp.com/send?phone=556799644531&text=Ol%C3%A1." className={`${styles.info}`}><BsWhatsapp style={{marginRight: 10}}/>(67) 9964-4531</Link>

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
                        <div className={`${styles.tarde}`}> 13:00 18:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>QUA:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 18:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>QUI:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 18:00</div>
                    </div>
                    <div className={`${styles.diaSemana}`}>
                        <div className={`${styles.dia}`}>SEX:</div>
                        <div className={`${styles.manha}`}>08:00 - 12:00 </div>
                        <div className={`${styles.tarde}`}> 13:00 18:00</div>
                    </div>

                </div>
                <div className={`${styles.containerSocial}`}>
                    <div className={`${styles.label}`}>Redes Sociais</div>
                    <div  className={styles.itens}>
                        <Link href="https://www.facebook.com/ferreiragomesimoveis/" className={styles.item} style={{marginBottom: 10}}>
                            <BsFacebook  size={20} color={'#3B5998'} style={{marginRight: 10}} /> 
                            fb.com/ferreiragomesimoveis
                        </Link>
                        <Link href="https://www.instagram.com/ferreiragomesimoveis/" className={styles.item}>
                            <AiFillInstagram size={23} color={'#fff'} style={{marginRight: 8}}/>
                            @ferreiragomesimoveis
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}