import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, name, placeholder, value, onChange, type }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="input-content"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
