import React from 'react';
import { inputClasses } from '../../../styles/utils';
import Radio from './Radio';

/**
 * Componente de Grupo de Radio buttons
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Label do grupo
 * @param {string} props.name - Nome do grupo de radio buttons
 * @param {Array} props.options - Array de opções [{value, label}]
 * @param {string} props.value - Valor selecionado
 * @param {function} props.onChange - Função de onChange
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {string} props.error - Mensagem de erro (se houver)
 * @param {string} props.className - Classes adicionais
 * @param {string} props.direction - Direção do grupo ('vertical' ou 'horizontal')
 */
export default function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  error,
  className = '',
  direction = 'vertical',
  ...props
}) {
  return (
    <div className={`${inputClasses.container} ${className}`}>
      {label && (
        <div className={inputClasses.label}>
          {label} {required && <span className="text-red-500">*</span>}
        </div>
      )}
      
      <div className={`${direction === 'vertical' ? 'flex flex-col space-y-2' : 'flex flex-row space-x-4'}`}>
        {options.map((option) => (
          <Radio
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checkedValue={value}
            label={option.label}
            onChange={onChange}
            required={required}
            {...props}
          />
        ))}
      </div>
      
      {error && <p className={inputClasses.errorMessage}>{error}</p>}
    </div>
  );
}
