import React from 'react'
import styles from './topo.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { loaderImg } from '../../utils'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import Modal from 'react-modal';
import FormBusca from '../formBusca'

export default function Topo(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [buscando, setBuscando] = useState(false)

    function openModal() {
        setBuscando(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setBuscando(false);
      }


    const BuscarMobile = () => {
        return(
            <div className={styles.botaoMenuMobile} onClick={() => {openModal(); setIsMenuOpen(false)}} style={{marginRight: 10}}> 
                <AiOutlineSearch size={30} className={styles.botaoMenuMobile}/>
            </div>
        )
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return(
        <div className={styles.container}>
            <div className={`containerTela ${styles.containerDentro}`}>
                <div className={styles.containerForaLogo}>
                    <div className={styles.containerLogo}>
                        <Image
                            loader={loaderImg}
                            src="/logo.png"
                            alt="Nome imobiliária"
                            fill
                        />
                    </div>
                </div>
                
                <nav>
                    <ul className={styles.containerLinks}>
                        <li>
                            <Link  href="/" className={styles.textoLink}>HOME</Link>
                        </li>   
                        <li>
                            <Link  href="/"  className={styles.textoLink}>ALUGUEL</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>VENDA</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>CONTATO</Link>
                        </li>
                    </ul>

                    <div className={styles.iconesMenuMobile}>
                        <BuscarMobile/>
                        <div className={styles.botaoMenuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                            <BiMenuAltRight size={40} className={styles.botaoMenuMobile}/>
                        </div>
                    </div>
                    
                    <ul className={isMenuOpen ? styles.containerLinksMobile :  styles.containerLinksFechado}>
                        <li>
                            <Link  href="/" className={styles.textoLink}>HOME</Link>
                        </li>   
                        <li>
                            <Link  href="/"  className={styles.textoLink}>ALUGUEL</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>VENDA</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>CONTATO</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Modal
                isOpen={buscando}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <FormBusca style={{}}/>
            </Modal>
        </div>
    )
}