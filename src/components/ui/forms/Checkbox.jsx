import React from 'react';
import { selectorClasses } from '../../../styles/utils';
import '../../../styles/custom.css';

/**
 * Componente de Checkbox reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Label do checkbox
 * @param {string} props.id - ID do checkbox
 * @param {boolean} props.checked - Se está marcado ou não
 * @param {function} props.onChange - Função de onChange
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {string} props.className - Classes adicionais
 */
export default function Checkbox({
  label,
  id,
  checked,
  onChange,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`${selectorClasses.checkContainer} ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        required={required}
        className={selectorClasses.checkbox}
        {...props}
      />
      
      {label && (
        <label htmlFor={id} className={selectorClasses.checkLabel}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
    </div>
  );
}
