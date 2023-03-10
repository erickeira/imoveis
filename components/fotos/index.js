import Image from 'next/image'
import { loaderImg } from '../../utils'
import styles from './fotos.module.scss'
import {GrAdd} from 'react-icons/gr'
import { FaTrashAlt } from 'react-icons/fa'
import { useDrag, useDrop } from "react-dnd";
import { useRef, useState, useCallback, createRef, useEffect } from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import {BsCardImage} from 'react-icons/bs'


export default function Fotos(props){
    const dropzoneRef = createRef();
    const { fotos, callbackchange } = props
    const [fotosAtualizadas, setFotosAtualizadas] = useState(fotos);
    const [isLoading ,setIsLoading] = useState(true)
    const [isLoadingFotos ,setIsLoadingFotos] = useState(false)

    const onDrop = (files) => incluirFotos(files)

    function incluirFotos(files) {
        setIsLoadingFotos(true);
        let novasImagens = fotosAtualizadas;
        const promises = [];
        files.forEach((file) => {
          if (fotos.length === 10) return;
          let novaImagem = {
            file: {},
            src: "",
          };
          novaImagem.file = file;
          const reader = new FileReader();
          const promise = new Promise((resolve) => {
            reader.onload = function (e) {
              novaImagem.src = e.target.result;
              novasImagens.push(novaImagem);
              resolve();
            };
          });
          reader.readAsDataURL(file);
          promises.push(promise);
        });
        Promise.all(promises)
          .then(() => {
            setFotosAtualizadas(novasImagens);
            callbackchange(novasImagens);
            setIsLoadingFotos(false);
          })
          .catch((error) => {
            console.error(error);
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
        noDrag: fotos.length ? true : false
    });

    function mudarFotos(hoverItem, dragitem){
        let novasImagens = fotos
        let from = hoverItem.index
        let to = dragitem.index 
        var el = novasImagens[from];
        novasImagens.splice(from, 1);
        novasImagens.splice(to, 0, el);
        callbackchange(novasImagens)
    }

    function removerImagem(index){
        let novasImagens = fotos
        novasImagens.splice(index, 1);
        setFotosAtualizadas(novasImagens)
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
        })
        const [collectedProps, dropRef] = useDrop({
            accept: "CARD",
            hover(item,monitor){
                if(item.index == e.index) return
                mudarFotos(e,  item)
                item.index = e.index
            },

        })

        dragRef(dropRef(ref));

        return(
            <div  ref={ref} style={{opacity: isDragging ? 0: 1}} className={styles.containerImagem}>
                <span className={styles.imagemIndex}>{e.index + 1}</span>
                <Image
                    // loader={loaderImg}
                    src={e.src}
                    alt="Casa"
                    fill
                    className={styles.imagem}
                    // unoptimized
                />
                <div onClick={() => removerImagem(e.index)} className={styles.deleteContainer}>
                    <FaTrashAlt/>
                </div>
            </div>
        )
    }
    // if(isLoading) return null
    return(
        <div className={`${styles.container}`}>
            <span className={`${styles.titulo}`}>Fotos ( {fotosAtualizadas.length}/10 ) </span>
            <div {...getRootProps({className: 'dropzone'})} style={{cursor: fotosAtualizadas.length ? 'default' : 'pointer'}} className={`${styles.gridContainer} `}>

               
                {
                    !isLoadingFotos ?
                    fotosAtualizadas.map((imagem, index) => {
                        return(
                            <DragImagem index={index} src={imagem.src ? imagem.src : imagem}/>
                        )
                    })
                    : null
                }
                {
                    fotosAtualizadas.length && fotosAtualizadas.length < 10?
                    <div {...getRootProps({className: 'dropzone'})} onClick={open} className={styles.containerImagem} style={{cursor: 'pointer'}}>
                        <GrAdd size={20}/>
                        <span>Adicionar</span>
                    </div>
                    :  null

                }
                {
                    !fotosAtualizadas.length ?
                    <div  className={styles.addContainer} style={{cursor: 'pointer'}}>
                        <BsCardImage size={40}/>
                        <span>Arraste ou clique para selecionar</span>
                    </div>
                    :null
                }

            </div>
      ????</div>
????????)
}
