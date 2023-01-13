import Image from "next/image";
import { loaderImg } from "../../utils";
import  styles  from './cardimovel.module.scss'
import {MdOutlineBed} from 'react-icons/md'
import {GiBathtub } from 'react-icons/gi'
import {AiOutlineCar} from 'react-icons/ai'

export default function CardImovel(){
    return(
        <div className={styles.container}>
            <div className={styles.imagem}>
                <Image
                    loader={loaderImg}
                    src="/imoveis/01.jpg"
                    alt="Casa"
                    fill
                    unoptimized
                    style={{borderRadius: 4}}
                />
            </div>
            <div className={styles.descricao}>
                <div  className={styles.titulo}>Casa "Santo Andre" - Pequena com 3 quartos e suite</div>
                <div  className={styles.localidade}>Rua Imaginaria, Jardim Falso - RJ</div>
                <div  className={styles.valor}>R$ 500/mês</div>
                <div  className={styles.itens}>
                    <div className={styles.item}>
                        <MdOutlineBed size={15} style={{marginRight: 5}}/>  5 
                    </div>
                    <div className={styles.item}>
                        <GiBathtub size={13} style={{marginRight: 5}}/>  2 
                    </div>
                    <div className={styles.item}>
                        <AiOutlineCar size={13} style={{marginRight: 5}}/>  1 
                    </div>

                </div>
            </div>
            
        </div>
    )
}