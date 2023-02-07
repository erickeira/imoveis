import styles from './button.module.scss'
export default function Button(props){
    const { titulo, onClick } = props
    return(
        <div onClick={() => onClick()} className={`${styles.container}`}>
            <span>{titulo}</span>
        </div>
    )
}