import Image from 'next/image'
import { loaderImg } from '../../../../utils'
import styles from './fotos.module.scss'
import {GrAdd} from 'react-icons/gr'
import { FaTrashAlt } from 'react-icons/fa'
import { useDrag, useDrop } from "react-dnd";
import { useRef, useState, useCallback, createRef, useEffect } from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';

export default function Fotos(props){
    const dropzoneRef = createRef();
    const { fotos, callbackchange } = props
    console.log(fotos)
    const [segurandoFoto, setSegurandoFoto] = useState(false)
    const onDrop = (files) => incluirFotos(files)
    function incluirFotos(files){
        files.map((file) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                let novasImagens = fotos
                // novasImagens.push(e.target.result)
                novasImagens.push(e)
                callbackchange(novasImagens)
            };
            reader.readAsDataURL(file);
            return file;
        });
    }

    const {
         getRootProps,
         getInputProps,
         acceptedFiles,
         isDragActive,
         isDragReject,
         open
    } = useDropzone({
        accept: { 
            'image/jpeg': [],
            'image/png': []
        },
        onDrop,
        noClick: fotos.length ? true : false,
        noDrag: segurandoFoto ? true : false,
    });

    useEffect(() => {
        if(segurandoFoto){
            setTimeout(() => {
                setSegurandoFoto(false)
            }, 4000);
        }
    },[segurandoFoto])

    function mudarFotos(hoverItem, dragitem){
        if(isDragActive) return
        let novasImagens = fotos
        let from = hoverItem.index
        let to = dragitem.index 
        var el = novasImagens[from];
        console.log(novasImagens)
        novasImagens.splice(from, 1);
        novasImagens.splice(to, 0, el);
        callbackchange(novasImagens)

    }

    function removerImagem(index){
        let novasImagens = fotos
        novasImagens.splice(index, 1);
        callbackchange(novasImagens)
    }

    const DragImagem = (e) => {
        const ref = useRef()
        const [{ isDragging }, dragRef] = useDrag({
            type: 'CARD',
            item: { index: e.index},
            collect: monitor => ({
                isDragging: monitor.isDragging(),
            }),
            isDragging: (monitor) => {
                if(!segurandoFoto) setSegurandoFoto(true)
            },
            end: () => {
                if(segurandoFoto) setSegurandoFoto(false)
            }
        })
        const [collectedProps, dropRef] = useDrop({
            accept: "CARD",
            hover(item,monitor){
                if(item.index == e.index) return
                mudarFotos(e,  item)
            },
        })

        dragRef(dropRef(ref));
        return(
            <div  ref={ref} style={{opacity: isDragging ? 0: 1}} className={styles.containerImagem}>
                <span className={styles.imagemIndex}>{e.index}</span>
                <Image
                    // loader={loaderImg}
                    src={e.src}
                    alt="Casa"
                    fill
                    className={styles.imagemHover}
                    unoptimized
                />
                <div onClick={() => removerImagem(e.index)} className={styles.deleteContainer}>
                    <FaTrashAlt/>
                </div>
            </div>
        )
    }

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    return(
        <div className={`${styles.container}`}>
            <span className={`${styles.titulo}`}>Fotos</span>
            <div {...getRootProps({className: 'dropzone'})} className={`${styles.gridContainer} `}>
                {/* <input {...getInputProps()} /> */}
                {isDragActive ? <div className={`${styles.containerDragActive} `}>Solte aqui</div> : null}
                {
                    fotos.map((imagem, index) => {
                        return(
                            <DragImagem index={index} src={imagem.target ? imagem.target.result : imagem}/>
                        )
                    })
                }
                <div {...getRootProps({className: 'dropzone'})} onClick={open} className={styles.containerImagem} style={{cursor: 'pointer'}}>
                    <GrAdd size={20}/>
                    <span>Adicionar</span>
                </div>
            </div>
        </div>
    )
}