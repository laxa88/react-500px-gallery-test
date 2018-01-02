import React from 'react';

/**
 * SearchKeyword
 */
class SearchKeyword extends React.Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  /**
   * handleKeydown
   * @param {*} e
   */
  handleKeydown(e) {
    if (e.keyCode === 13) {
      // TODO call parent-provided callback to perform search by keyword
      // TODO add separate button to manually perform search (in case category filter is updated)
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
          Filter by keyword <input onKeyDown={this.handleKeydown} />
        </p>
      </div>
    );
  }
}

export default SearchKeyword;
