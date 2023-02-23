import { margin } from '@mui/system'
import Loader from '../loader'
import LoaderDefault from '../loaderDefault'
import styles from './button.module.scss'
export default function Button(props){
    const { titulo, onClick, color, size, loading, style } = props
    return(
        <div onClick={() => onClick()} className={`${styles.container}`} style={{...style, backgroundColor : color || '#009834', width: size || 200}}>
            {
                loading ?
                <LoaderDefault size={20} color="#fff"/>
                :
                <span>{titulo}</span>
            }

        </div>
    )
}