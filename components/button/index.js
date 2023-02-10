import styles from './button.module.scss'
export default function Button(props){
    const { titulo, onClick, color, size } = props
    return(
        <div onClick={() => onClick()} className={`${styles.container}`} style={{backgroundColor : color || '#009834', width: size || 200}}>
            <span>{titulo}</span>
        </div>
    )
}