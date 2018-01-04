import React from 'react';
import PropTypes from 'prop-types';

import './pagination.css';

/**
 * Pagination
 */
class Pagination extends React.Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @param {*} e
   */
  handleClick(e) {
    if (this.props.onClick) {
      const page = parseInt(e.target.innerHTML);
      this.props.onClick(page);
    }
  }

  /**
   * render
   * @return {*}
   */
  render() {
    const currPage = this.props.page;
    const pages = [currPage];

    // Fill in page numbers before and after the current page,
    // starting from page 1
    for (let i = 1; i <= 5; i++) {
      const prevPage = currPage - i;
      const nextPage = currPage + i;
      if (prevPage > 0) {
        pages.unshift(prevPage);
      }
      pages.push(nextPage);
    }

    console.log('##', this.props);
    console.log('#', pages);

    return (
      <div className='pagination'>
        <div>&lt;</div>
        {
          pages.map((number) => {
            return (
              <div key={number}>
                {
                  number === currPage
                  ?
                  number
                  :
                  <a
                    href='#'
                    onClick={this.handleClick} >
                    {number}
                  </a>
                }
              </div>
            );
          })
        }
        <div>&gt;</div>
      </div>
    );
  }
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;
