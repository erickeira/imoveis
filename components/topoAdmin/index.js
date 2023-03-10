import React, { useContext } from 'react'
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
import { AuthContext } from '../../context'
import { useRouter } from 'next/router'

export default function TopoAdmin(){
    const {isLogado, deslogar} = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [buscando, setBuscando] = useState(false)
    const router = useRouter()

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

    function handleDeslogar(){
        deslogar().then(() => {
            router.push('/admin')
        })
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
                            alt="Nome imobili??ria"
                            fill
                            unoptimized
                        />
                    </Link>
                </div>
                {
                    isLogado ? 
                    <nav>
                        <ul className={styles.containerLinks}>
                            <li>
                                <Link  href="/admin/imoveis" className={styles.textoLink}>MEUS IM??VEIS</Link>
                            </li>   
                            <li>
                                <Link  href="/"  className={styles.textoLink}>PERFIL</Link>
                            </li>
                            <li>
                            <div onClick={() => handleDeslogar()} className={styles.textoLink}>SAIR</div>
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
                                <Link  href="/admin/imoveis" className={styles.textoLink}>MEUS IM??VEIS</Link>
                            </li>   
                            <li>
                                <Link  href="/"  className={styles.textoLink}>PERFIL</Link>
                            </li>
                            <li>
                                <div onClick={() => handleDeslogar()} className={styles.textoLink}>SAIR</div>
                            </li>
                        </ul>
                    </nav>
                    : null
                }
                
            </div>
        </div>
    )
}