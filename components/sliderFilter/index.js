import styles from './sliderfilter.module.scss'

export default function SliderFilter(){

    const InputBusca = () =>{
        return(
            <div>
                <input type={'text'} className={styles.inputTexto}/>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={`containerTela  ${styles.containerDentro}`}>
                <div  className={`${styles.containerImgs}`}/>
                <div className={`${styles.containerBusca}`}>
                    <div className={`${styles.containerInput}`}>
                        <InputBusca/>
                    </div>

                </div>
            </div>


        </div>
    )
}