import React from 'react';
import styles from './inputselect.module.scss';
import Select from 'react-select'


export default function InputSelect(props){
    const { onChange, value, options, titulo, size, isMulti} = props
    // const options = [
    //     { value: 'Selecione', label: 'Selecione' },
    //     { value: 'Venda', label: 'Venda' },
    //     { value: 'Aluguel', label: 'Aluguel' },
    // ]
    const colourStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            height: 45,
            borderColor:'#fff',
            width: size || '100%',
            boxShadow: '0.2px 0.1px 3px #666'
        })
    };
    return(
        <Select 
            options={options || []} 
            className={styles.select} 
            placeholder={titulo}
            styles={colourStyles}
            noOptionsMessage={() => {return 'Nenhum encontrado'}}
            isMulti={isMulti || false}
        />
    )
}