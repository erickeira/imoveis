import InputTexto from '../../../../components/inputTexto'
import InputSelect from '../../../../components/inputSelect'
import InputArea from '../../../../components/inputArea'
import styles from './detalhesimovel.module.scss'
import { bairros, condicoes, finalidades, tiposdeimovel, caracteristicas, numeros } from '../../../../utils'

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
                            size={230}
                            selecionado={dadosImovel.condicao  || ''}
                        />
                        <InputSelect 
                            onChange={e => callbackchange({finalidade: e.value})} 
                            titulo={'Finalidade'} 
                            options={finalidades.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            size={230}
                            selecionado={dadosImovel.finalidade || ''}
                        />
                        <InputSelect 
                            onChange={e => callbackchange({tipo: e.value})} 
                            titulo={'Tipo de imóvel'} 
                            options={tiposdeimovel.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            size={300}
                            selecionado={dadosImovel.tipo || ''}
                        />
                    </div>
                    <div className={`${styles.label}`}>Localização</div>
                    <div className={`${styles.flexInput}`}>
                        <InputSelect 
                            titulo={'Bairro'} 
                            options={bairros.map(item => { return {value: item, label: item}})} 
                            style={{borderColor: '#fff'}} 
                            size={230}
                            selecionado={dadosImovel.bairro || ''}
                            onChange={e => callbackchange({bairro: e.value})} 
                        /> 
                        <InputTexto titulo={'Endereço'} options={caracteristicas.map(item => { return {value: item, label: item}})} style={{width: 400}}/>
                    </div>

                    <InputTexto titulo={'Titulo'} style={{width: 400, marginTop: 30, marginBottom: 30}}/>
                    <div className={`${styles.flexInput}`}>
                        <InputTexto titulo={'Área Construída'} style={{width: 200}}/>
                        <InputTexto titulo={'Área Total'} style={{width: 200}}/>
                    </div>

                    <div className={`${styles.label}`}>Características</div>
                    <InputSelect titulo={'Características'} style={{borderColor: '#fff'}} size={230}/>
                    <div className={`${styles.flexInput}`}>
                        <InputArea titulo={'Descrição'} size={500}/>
                        <InputArea titulo={'Informações adicionais'} size={500}/>
                    </div>
                    <div className={`${styles.flexInput}`} style={{marginTop: 30}}>
                        <InputSelect titulo={'Quartos'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Garagem'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Sala de estar '} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Sala de tv'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/>
                        <InputSelect titulo={'Suite'} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} size={190}/> 
                    </div>

                    <div className={`${styles.flexInput}`} style={{marginTop: 40}}>
                        <InputTexto titulo={'IPTU'} style={{width: 200}}/>
                        <InputTexto titulo={'Condomínio'} style={{width: 200}}/>
                        <InputTexto titulo={'Valor'} style={{width: 200}}/>
                    </div>
                </div>
            </div> 
        </div>
    ) 
}