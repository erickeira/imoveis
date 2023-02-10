import InputTexto from '../inputTexto'
import InputSelect from '../inputSelect'
import InputArea from '../inputArea'
import styles from './detalhesimovel.module.scss'
import { bairros, condicoes, finalidades, tiposdeimovel, caracteristicas, numeros } from '../../utils'

export default function DetalhesImovel(props){
    const { callbackchange, dadosImovel } = props
    return(
        <div className={`${styles.container} bgAdmin`}>
            <div className={`${styles.containerDentro} containerTelaAdmin`}>
                <div className={`${styles.containerForm}`}>
                    <div className={`${styles.flexInput}`}>
                        <InputSelect 
                            onChange={e => callbackchange({condicao: e.value})} 
                            titulo={'Condição'} 
                            options={condicoes.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            // size={230}
                            selecionado={dadosImovel?.condicao}
                            className={`${styles.condicao}`}
                        />
                        <InputSelect 
                            onChange={e => callbackchange({finalidade: e.value})} 
                            titulo={'Finalidade'} 
                            options={finalidades.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            // size={230}
                            selecionado={dadosImovel?.finalidade}
                            className={`${styles.finalidade}`}
                        />
                        <InputSelect 
                            onChange={e => callbackchange({tipo: e.value})} 
                            titulo={'Tipo de imóvel'} 
                            options={tiposdeimovel.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            // size={300}
                            selecionado={dadosImovel?.tipo}
                        />
                    </div>
                    <div className={`${styles.label}`}>Localização</div>
                    <div className={`${styles.flexInput}`}>
                        <InputSelect 
                            titulo={'Bairro'} 
                            options={bairros.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            // size={230}
                            selecionado={dadosImovel?.bairro}
                            onChange={e => callbackchange({bairro: e.value})}
                            className={`${styles.bairro}`}
                        /> 
                        <InputTexto 
                            titulo={'Rua'} 
                            value={dadosImovel.rua} 
                            onChange={e => callbackchange({rua: e})} 
                            className={`${styles.rua}`}
                        />
                    </div>

                    <InputTexto titulo={'Titulo'} className={`${styles.titulo}`} value={dadosImovel.titulo} onChange={e => callbackchange({titulo: e})} style={{marginTop: 30, marginBottom: 30}}/>
                    <div className={`${styles.flexInput}`}>
                        <InputTexto titulo={'Área Construída'} className={`${styles.area}`}/>
                        <InputTexto titulo={'Área Total'} className={`${styles.area}`}/>
                    </div>

                    <div className={`${styles.label}`}>Características</div>
                    <InputSelect className={`${styles.caracteristicas}`} titulo={'Características'} style={{borderColor: '#fff'}} size={230}/>
                    <div className={`${styles.flexInput}`}>
                        <InputArea titulo={'Descrição'} />
                        <InputArea titulo={'Informações adicionais'} />
                    </div>
                    <div className={`${styles.flexInput}`} style={{marginTop: 30}}>
                        <InputSelect titulo={'Quartos'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Garagem'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Sala de estar '} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Sala de tv'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Suite'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/> 
                    </div>

                    <div className={`${styles.flexInput}`} style={{marginTop: 40}}>
                        <InputTexto titulo={'IPTU'} value={dadosImovel.iptu} onChange={e => callbackchange({iptu: e})} className={`${styles.valores}`}/>
                        <InputTexto titulo={'Condomínio'} value={dadosImovel.condominio} onChange={e => callbackchange({condominio: e})} className={`${styles.valores}`}/>
                        <InputTexto titulo={'Valor'} value={dadosImovel.valor} onChange={e => callbackchange({valor: e})} className={`${styles.valores}`}/>
                    </div>
                </div>
            </div> 
        </div>
    ) 
}