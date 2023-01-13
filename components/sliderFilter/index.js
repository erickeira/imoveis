import styles from './sliderfilter.module.scss'
import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SliderFilter(){

    const InputBusca = () =>{
        return(
            <div className={`${styles.containerInput}`}>
                <AiOutlineSearch className={`${styles.iconeSearch}`}/>
                <input type={'text'}  className={styles.inputTexto} placeholder={`Busca por localidade..`}/>
                <Link href={`/`} className={`${styles.botaoPesquisar}`}>Pesquisar</Link>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <div  className={`${styles.containerImgs1}`}/>
                <div className={`${styles.containerBusca}`}>

                    <InputBusca/>
                </div>
            </div>


        </div>
    )
}