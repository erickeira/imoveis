import React from 'react'
import styles from './topoadmin.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { loaderImg } from '../../utils'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import ReactModal from 'react-modal';
import FormBusca from '../formBusca'
import { AiOutlineClose } from 'react-icons/ai'

export default function TopoAdmin(){
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
        <div className={`${styles.container} bgAdmin`}>
            <div className={`containerTelaAdmin  ${styles.containerDentro}`}>
                <div className={styles.containerForaLogo}>
                    <Link href={'/'} className={styles.containerLogo}>
                        <Image
                            loader={loaderImg}
                            src="/logo.png"
                            alt="Nome imobiliária"
                            fill
                            unoptimized
                        />
                    </Link>
                </div>
                
                <nav>
                    <ul className={styles.containerLinks}>
                        <li>
                            <Link  href="/admin/imoveis" className={styles.textoLink}>MEUS IMÓVEIS</Link>
                        </li>   
                        <li>
                            <Link  href="/"  className={styles.textoLink}>PERFIL</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>SAIR</Link>
                        </li>
                    </ul>

                    <div className={styles.iconesMenuMobile}>
                        {/* <BuscarMobile/> */}
                        <div className={styles.botaoMenuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                            <BiMenuAltRight size={40} className={styles.botaoMenuMobile}/>
                        </div>
                    </div>
                    
                    <ul className={isMenuOpen ? styles.containerLinksMobile :  styles.containerLinksFechado}>
                        <li>
                            <Link  href="/admin/imoveis" className={styles.textoLink}>MEUS IMÓVEIS</Link>
                        </li>   
                        <li>
                            <Link  href="/"  className={styles.textoLink}>PERFIL</Link>
                        </li>
                        <li>
                            <Link  href="/"  className={styles.textoLink}>SAIR</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}