import React from 'react';
import { selectorClasses } from '../../../styles/utils';
import '../../../styles/custom.css';

/**
 * Componente de Radio reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Label do radio
 * @param {string} props.id - ID do radio
 * @param {string} props.name - Nome do grupo de radio buttons
 * @param {string} props.value - Valor do radio
 * @param {string} props.checkedValue - Valor atualmente selecionado
 * @param {function} props.onChange - Função de onChange
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {string} props.className - Classes adicionais
 */
export default function Radio({
  label,
  id,
  name,
  value,
  checkedValue,
  onChange,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`${selectorClasses.checkContainer} ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={value === checkedValue}
        onChange={onChange}
        required={required}
        className={selectorClasses.radio}
        {...props}
      />
      
      {label && (
        <label htmlFor={id} className={selectorClasses.checkLabel}>
          {label}
        </label>
      )}
    </div>
  );
}
