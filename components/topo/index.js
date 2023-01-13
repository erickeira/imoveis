import styles from './topo.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { loaderImg } from '../../utils'

import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'

export default function Topo(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
        <div className={styles.container}>
            <div className={`containerTela ${styles.containerDentro}`}>
                <div className={styles.containerLogo}>
                    <Image
                        loader={loaderImg}
                        src="/logo.png"
                        alt="Nome imobiliária"
                        width={300}
                        height={80}
                        unoptimized
                    />
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

                    <div className={styles.botaoMenuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                        <BiMenuAltRight size={40} className={styles.botaoMenuMobile}/>
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