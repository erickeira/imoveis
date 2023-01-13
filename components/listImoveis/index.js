import CardImovel from "../cardImovel";
import styles from './listimoveis.module.scss'

export default function ListImoveis(){
    return(
        <div className={`containerTela`}>
            <h3 className={styles.label}>6 Imóveis em destaque </h3>
            <div className={`${styles.container}`} style={{marginBottom: 500}}>
                <CardImovel imagem={``}/>
                <CardImovel imagem={``}/>
                <CardImovel imagem={``}/>
                <CardImovel imagem={``}/>
                <CardImovel imagem={``}/>
                <CardImovel imagem={``}/>
            </div>
        </div>
    )
}