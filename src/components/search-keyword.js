import React from 'react';
import PropTypes from 'prop-types';

/**
 * SearchKeyword
 */
class SearchKeyword extends React.Component {
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
    if (this.props.onBlur) {
      this.props.onBlur(this.state.value);
    }
  }

  /**
   * render
   * @return {*}
   */
  render() {
    return (
      <div>
        <p>
          Filter by keyword <input
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            />
        </p>
      </div>
    );
  }
}

SearchKeyword.propTypes = {
  onBlur: PropTypes.func.isRequired,
};

export default SearchKeyword;
