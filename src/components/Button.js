import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, icon, text, onChange }) => {
  return variant !== 'icon-btn' ? (
    <button className="btn" type="submit">
      {text}
    </button>
  ) : (
    <button className="icon-btn" onClick={onChange}>
      {icon}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default Button;
