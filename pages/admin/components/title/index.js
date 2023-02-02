import styles from './title.module.scss'
export default function Title({ titulo }){
    return(
        <div className={`${styles.container}`}>
            {titulo}
        </div>
    )
}