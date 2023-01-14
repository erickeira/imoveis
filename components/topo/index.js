import React from 'react'
import styles from './topo.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { loaderImg } from '../../utils'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'

export default function Topo(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [buscando, setBuscando] = useState(false)


    const BuscarMobile = () => {
        return(
            <div className={styles.botaoMenuMobile} onClick={() => {setBuscando(!buscando); setIsMenuOpen(false)}} style={{marginRight: 10}}> 
                <AiOutlineSearch size={30} className={styles.botaoMenuMobile}/>
            </div>
        )
    }
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
        </div>
    )
}