import React from 'react';
import PropTypes from 'prop-types';

/**
 * SearchKeywordInput
 */
class SearchKeywordInput extends React.Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  /**
   * handleChange
   * @param {*} e
   */
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  /**
   * handleBlur
   * @param {*} e
   */
  handleBlur(e) {
    this.props.onBlur(this.state.value);
  }

  /**
   * render
   * @return {*}
   */
  render() {
    return (
      <div className="row">
        Filter by keyword <input
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          />
      </div>
    );
  }
}

SearchKeywordInput.propTypes = {
  onBlur: PropTypes.func.isRequired,
};

export default SearchKeywordInput;
