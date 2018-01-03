import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = (props) => (
  <div className="row">
    <input
      type="button"
      onClick={props.onClick}
      value={props.label}
    />
  </div>
);

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchButton;
