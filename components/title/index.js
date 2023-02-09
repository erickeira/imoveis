
import styles from './title.module.scss'
export default function Title({ titulo, renderRight }){
    return(
        <div className={`${styles.container}`}>
            {titulo}
            {renderRight}
        </div>
    )
}