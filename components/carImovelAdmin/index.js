import Image from "next/image";
import { formatarReal, loaderImg, loaderImgBackEnd } from "../../utils/";
import  styles  from './cardimoveladmin.module.scss'
import {MdOutlineBed} from 'react-icons/md'
import {GiBathtub } from 'react-icons/gi'
import {AiOutlineCar} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import {MdEdit} from 'react-icons/md'

export default function CardImovelAdmin({data, callbackdelete}){
    const {
        fotos,
        id,
        createdAt,
        condicao,
        finalidade,
        tipo,
        bairro,
        rua,
        titulo,
        areaConstruida,
        areaTotal,
        caracteristicas,
        descricao,
        infoAdicionais,
        quartos,
        garagem,
        salaEstar,
        salaTv,
        suite,
        iptu,
        condominio,
        valor,
    } = data
    return(
        <div className={styles.container}>
            <div className={styles.containerImagem}>
                <div className={styles.imagem}>
                    <Image
                        // loader={loaderImgBackEnd}
                        src={`http://localhost:3000/images/${fotos[0]}`}
                        alt="Casa"
                        fill
                        className={styles.imagemHover}
                        unoptimized
                    />
                </div>
            </div>
            <div className={styles.descricao}>
                <div  className={styles.titulo}>{titulo || 'Sem título'}</div>
                <div style={{display: 'flex', height: 20, alignItems: 'center'}}>
                    <div  className={styles.finalidade} style={{backgroundColor: finalidade == 'Venda' ? '#2DC9BF' : '#5F2DC9'}}>{finalidade || ''}</div>
                    <div className={styles.tipo} >{tipo || ''}</div>
                </div>
                <div  className={styles.localidade}><BiMap style={{marginRight: 10}}/>{rua || ''}{rua && bairro ? ' - ': ''}{bairro || ''}</div>
                <div  className={styles.valor}>{valor ? formatarReal(valor) : ''}</div>
            </div> 
            <div className={styles.terceiroContainer}>
                <div className={styles.containerBotoes}>
                    <div onClick={() => console.log(id)} className={styles.editContainer}>
                        <MdEdit  className={styles.iconEdit}/>
                    </div>
                    <div onClick={() => callbackdelete(id)} className={styles.deleteContainer}>
                        <FaTrashAlt  className={styles.iconDelete}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}