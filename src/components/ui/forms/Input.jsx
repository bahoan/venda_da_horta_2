import React from 'react';
import { inputClasses } from '../../../styles/utils';
import '../../../styles/custom.css';

/**
 * Componente de Input reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Label do input
 * @param {string} props.id - ID do input
 * @param {string} props.type - Tipo do input (text, email, password, etc)
 * @param {string} props.placeholder - Placeholder do input
 * @param {string} props.value - Valor do input
 * @param {function} props.onChange - Função de onChange
 * @param {string} props.error - Mensagem de erro (se houver)
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {string} props.className - Classes adicionais
 */
export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
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
      
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${error ? inputClasses.error : inputClasses.default} ${error ? 'input-error' : 'input-default'}`}
        {...props}
      />
      
      {error && <p className={inputClasses.errorMessage}>{error}</p>}
    </div>
  );
}
