import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import InputTexto from '../../components/inputTexto';
import styles from './imovel.module.scss'

export default function Imovel(){
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    const rota = 'ALUGUEL > MS'
    return (
        <div className={`containerTela`}>
            <div className={`${styles.containerImagensFormulario}`}>
                <div className={`${styles.containerImagens}`}>
                    <ImageGallery 
                        items={images} 
                        showPlayButton={false}
                    />
                </div>
                <div className={`${styles.containerFormulario}`}>
                    <div className={`${styles.titulo}`}>ENVIE UM PROPOSTA</div>
                    <InputTexto titulo={'Nome'}/>
                    <InputTexto titulo={'Email'}/>
                    <InputTexto titulo={'Telefone'}/>
                </div>
            </div>
        </div>
    );
}