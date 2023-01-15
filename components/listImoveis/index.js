import CardImovel from "../cardImovel";
import styles from './listimoveis.module.scss'

export default function ListImoveis(props){
    const { titulo } = props
    return(
        <div className={`containerTela`}>
            <h3 className={styles.label}>6 Imóveis em {titulo} </h3>
            <div className={`${styles.container}`} style={{marginBottom: 50}}>
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