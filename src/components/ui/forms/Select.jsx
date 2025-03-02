import React from 'react';
import { inputClasses, selectorClasses } from '../../../styles/utils';
import '../../../styles/custom.css';

/**
 * Componente de Select reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Label do select
 * @param {string} props.id - ID do select
 * @param {Array} props.options - Array de opções para o select [{value, label}]
 * @param {string} props.value - Valor selecionado
 * @param {function} props.onChange - Função de onChange
 * @param {string} props.error - Mensagem de erro (se houver)
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {string} props.className - Classes adicionais
 */
export default function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  error,
  required = false,
  placeholder = 'Selecione uma opção',
  className = '',
  ...props
}) {
  return (
    <div className={`${inputClasses.container} ${className}`}>
      {label && (
        <label htmlFor={id} className={inputClasses.label}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={selectorClasses.select}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && <p className={inputClasses.errorMessage}>{error}</p>}
    </div>
  );
}
