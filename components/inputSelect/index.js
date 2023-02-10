import React from 'react';
import styles from './inputselect.module.scss';
import Select from 'react-select'


export default function InputSelect(props){
    const { onChange, value, options, titulo, size, isMulti, style, selecionado, className} = props
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
    return(
        <div className={`${styles.select} ${className}`}>
            <div className={styles.containerTitulo}>
                <span className={styles.titulo} >{titulo}</span>
            </div>
            <Select 
                options={options || []} 
                // className={styles.select} 
                styles={colourStyles}
                value={{value: selecionado || 'Selecione', label: selecionado || 'Selecione'}}
                noOptionsMessage={() => {return 'Nenhum encontrado'}}
                isMulti={isMulti || false}
                onChange={e => {if(onChange) onChange(e)}}
            />
        </div>
    )
}