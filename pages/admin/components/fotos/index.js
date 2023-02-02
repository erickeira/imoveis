import Image from 'next/image'
import { loaderImg } from '../../../../utils'
import styles from './fotos.module.scss'
import {GrAdd} from 'react-icons/gr'
import { FaTrashAlt } from 'react-icons/fa'
import { useDrag, useDrop } from "react-dnd";
import { useRef, useState } from 'react';

export default function Fotos(){
    const [imagens, setImagens] = useState([
        "/imoveis/01.jpg",
        "/imoveis/02.jpg",
        "/imoveis/03.jpg",
        "/imoveis/01.jpg"
    ])
    
    function mudarFotos(hoverItem, dragitem){
        let novasImagens = imagens
        let from = hoverItem.index
        let to = dragitem.index 
        var el = novasImagens[from];
        console.log(novasImagens)
        novasImagens.splice(from, 1);
        novasImagens.splice(to, 0, el);

        setImagens(novasImagens)
    }

    const DragImagem = (e) => {
        const ref = useRef()
        const [{ isDragging }, dragRef] = useDrag({
            type: 'CARD',
            item: { index: e.index},
            collect: monitor => ({
                isDragging: monitor.isDragging(),
            }),
        })
        const [collectedProps, dropRef] = useDrop({
            accept: "CARD",
            hover(item,monitor){
                if(item.index == e.index) return
                mudarFotos(e,  item)
            },
            drop: () => {
      
            }
        })

        dragRef(dropRef(ref));
        return(
            <div ref={ref} style={{opacity: isDragging? 0: 1}} className={styles.containerImagem}>
                <span className={styles.imagemIndex}>{e.index}</span>
                <Image
                    loader={loaderImg}
                    src={e.src}
                    alt="Casa"
                    fill
                    className={styles.imagemHover}
                    unoptimized
                />
                <div className={styles.deleteContainer}>
                    <FaTrashAlt/>
                </div>
            </div>
        )
    }
    return(
        <div className={`${styles.container}`}>
            <span className={`${styles.titulo}`}>Fotos</span>
            <div className={`${styles.gridContainer}`}>
                {
                    imagens.map((imagem, index) => {
                        return(
                            <DragImagem index={index} src={imagem}/>
                        )
                    })
                }
                <div className={styles.containerImagem} style={{cursor: 'pointer'}}>
                    <GrAdd size={20}/>
                    <span>Adicionar</span>
                </div>
            </div>
        </div>
    )
}