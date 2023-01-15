import Image from "next/image";
import { loaderImg } from "../../utils";
import  styles  from './cardcorretor.module.scss'
import {MdOutlineBed} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'

export default function CardCorretor(props){
    const {foto} = props
    return(
        <div className={styles.container}>
            <div className={styles.imagem}>
                <Image
                    loader={loaderImg}
                    src={`/corretores/${foto}`}
                    alt="Casa"
                    className={styles.imagemHover}
                    fill
                    unoptimized
                />
            </div>
            <div className={styles.descricao}>
                <div  className={styles.titulo}>Erick Almeida</div>
                <div className={styles.creciItens}>
                    <div  className={styles.creci}>CRECI: 5050 </div>
                    <div  className={styles.itens}>
                        <div className={styles.item} style={{marginRight: 10}}>
                            <BsFacebook  size={15} color={'#3B5998'} /> 
                        </div>
                        <div className={styles.item}>
                            <FaWhatsapp size={17} color={'green'}/>   
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}