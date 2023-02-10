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
                        <InputTexto 
                            titulo={'Área Construída'} 
                            value={dadosImovel.areaconstruida} 
                            tipo={'metro'}  
                            className={`${styles.area}`}
                            onChange={e => callbackchange({areaconstruida: e})} 
                        />
                        <InputTexto 
                            titulo={'Área Total'} 
                            value={dadosImovel.areatotal} 
                            tipo={'metro'} 
                            className={`${styles.area}`}
                            onChange={e => callbackchange({areatotal: e})} 
                        />
                    </div>

                    <div className={`${styles.label}`}>Características</div>
                    <InputSelect className={`${styles.caracteristicas}`} titulo={'Características'} style={{borderColor: '#fff'}} size={230}/>
                    <div className={`${styles.flexInput}`}>
                        <InputArea titulo={'Descrição'} />
                        <InputArea titulo={'Informações adicionais'} />
                    </div>
                    <div className={`${styles.flexInput}`} style={{marginTop: 30}}>
                        <InputSelect titulo={'Quartos'} onChange={e => callbackchange({quartos: e.value})} selecionado={dadosImovel.quartos} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} className={`${styles.quantidade}`}/>
                        <InputSelect titulo={'Garagem'} onChange={e => callbackchange({garagem: e.value})} selecionado={dadosImovel.garagem} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} className={`${styles.quantidade}`}/>
                        <InputSelect titulo={'Sala de estar '} onChange={e => callbackchange({salaestar: e.value})} selecionado={dadosImovel.salaestar} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} className={`${styles.quantidade}`}/>
                        <InputSelect titulo={'Sala de tv'} onChange={e => callbackchange({salatv: e.value})}  selecionado={dadosImovel.salatv} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} className={`${styles.quantidade}`}/>
                        <InputSelect titulo={'Suite'} onChange={e => callbackchange({suite: e.value})}  selecionado={dadosImovel.suite} options={numeros.map(item => { return {value: item, label: item}})} style={{borderColor: '#fff'}} className={`${styles.quantidade}`}/> 
                    </div>

                    <div className={`${styles.flexInput}`} style={{marginTop: 40}}>
                        <InputTexto titulo={'IPTU'} value={dadosImovel.iptu} onChange={e => callbackchange({iptu: e})} className={`${styles.valores}`}/>
                        <InputTexto titulo={'Condomínio'} tipo={'moeda'}  value={dadosImovel.condominio} onChange={e => callbackchange({condominio: e})} className={`${styles.valores}`}/>
                        <InputTexto titulo={'Valor'} tipo={'moeda'} value={dadosImovel.valor} onChange={e => callbackchange({valor: e})} className={`${styles.valores}`}/>
                    </div>
                </div>
            </div> 
        </div>
    ) 
}