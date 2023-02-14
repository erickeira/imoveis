import React from 'react';
import styles from './inputselect.module.scss';
import Select from 'react-select'


export default function InputSelect(props){
    const { onChange, value, options, titulo, size, isMulti, style, selecionado,selecionados, className} = props
    // const options = [
    //     { value: 'Selecione', label: 'Selecione' },
    //     { value: 'Venda', label: 'Venda' },
    //     { value: 'Aluguel', label: 'Aluguel' },
    // ]
    const colourStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            minHeight: 1,
            paddingBottom: 0,
            borderColor:'#fff',
            color: '#000',
            width: '100%',
             border: state.isFocused ? 0 : 0,
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            '&:hover': {
            border: state.isFocused ? 0 : 0
            },
            // boxShadow: '0.2px 0.1px 3px #666',
            ...style,
        })
    };

    function retornaValor(e){
        if(onChange) onChange(e)
    }

    function getSelecionado(){
        if(selecionados) return options.filter(obj => selecionados.includes(obj.value));
        if(selecionado) return {value: selecionado, label: selecionado}
        return null
    }

    return(
        <div className={`${styles.select} ${className}`}>
            <div className={styles.containerTitulo}>
                <span className={styles.titulo} >{titulo}</span>
            </div>
            <Select 
                options={options || []} 
                // className={styles.select} 
                placeholder="Selecione"
                styles={colourStyles}
                value={getSelecionado()}
                noOptionsMessage={() => {return 'Nenhum encontrado'}}
                isMulti={isMulti || false}
                onChange={e => retornaValor(e)}
            />
        </div>
    )
}