import styles from './button.module.scss'
export default function Button(props){
    const { titulo, onClick, color } = props
    return(
        <div onClick={() => onClick()} className={`${styles.container}`} style={{backgroundColor : color || '#009834'}}>
            <span>{titulo}</span>
        </div>
    )
}