import styles from './button.module.scss'
export default function Button(props){
    const { titulo } = props
    return(
        <div className={`${styles.container}`}>
            <span>{titulo}</span>
        </div>
    )
}