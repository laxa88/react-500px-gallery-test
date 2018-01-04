import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div className="row">
    <input
      type="button"
      onClick={props.onClick}
      value={props.label}
    />
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
