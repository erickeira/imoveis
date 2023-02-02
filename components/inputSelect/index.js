import React from 'react';
import styles from './inputselect.module.scss';
import Select from 'react-select'


export default function InputSelect(props){
    const { onChange, value, options, titulo, size, isMulti, style, selecionado} = props
    // const options = [
    //     { value: 'Selecione', label: 'Selecione' },
    //     { value: 'Venda', label: 'Venda' },
    //     { value: 'Aluguel', label: 'Aluguel' },
    // ]
    const colourStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            minHeight: 1,
            paddingTop: 20,
            paddingBottom: 0,
            borderColor:'#fff',
            color: '#000',
            width: size || '100%',
            // boxShadow: '0.2px 0.1px 3px #666',
            ...style,
        })
    };
    return(
        <div className={styles.select} style={{width: size || '100%'}}>
            <span className={styles.titulo} >{titulo}</span>
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