import styles from './loader.module.scss'

export default function LoaderDefault(props){
    const { size} = props
    const estilos ={
        width: size || 48,
        height: size || 48
    }
    return(
        <span class={styles.loader} style={estilos}></span>
    )
}