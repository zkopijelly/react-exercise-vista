import { useState } from 'react'

const Input = ({ label, type = 'text', placeholder, color = 'black', size = 'medium', validation, name }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
  
      if (validation) {
        const validationError = validation(newValue);
        setError(validationError);
      }
    };
  
    const inputClass = `input-field input-${size}`;
  
    return (
      <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className={inputClass}
          value={value}
          onChange={handleChange}
          style={{ color }}
          name={name}  
        />
        {error && <div className="error-message">{error}</div>}
      </div>
    );
  };
  
  export default Input;  