import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

/**
 * SearchCategory
 */
class SearchCategory extends React.Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.handleFilterToggle = this.handleFilterToggle.bind(this);
    this.handleCategoryCheck = this.handleCategoryCheck.bind(this);

    this.state = {
      isFilterByCategory: false,
      categories: [
        {id: 0, key: 'Uncategorized', value: false},
        {id: 10, key: 'Abstract', value: false},
        {id: 29, key: 'Aerial', value: false},
        {id: 11, key: 'Animals', value: false},
        {id: 5, key: 'Black and White', value: false},
        {id: 1, key: 'Celebrities', value: false},
        {id: 9, key: 'City and Architecture', value: false},
        {id: 15, key: 'Commercial', value: false},
        {id: 16, key: 'Concert', value: false},
        {id: 20, key: 'Family', value: false},
        {id: 14, key: 'Fashion', value: false},
        {id: 2, key: 'Film', value: false},
        {id: 24, key: 'Fine Art', value: false},
        {id: 23, key: 'Food', value: false},
        {id: 3, key: 'Journalism', value: false},
        {id: 8, key: 'Landscapes', value: false},
        {id: 12, key: 'Macro', value: false},
        {id: 18, key: 'Nature', value: false},
        {id: 30, key: 'Night', value: false},
        {id: 4, key: 'Nude', value: false},
        {id: 7, key: 'People', value: false},
        {id: 19, key: 'Performing Arts', value: false},
        {id: 17, key: 'Sport', value: false},
        {id: 6, key: 'Still Life', value: false},
        {id: 21, key: 'Street', value: false},
        {id: 26, key: 'Transportation', value: false},
        {id: 13, key: 'Travel', value: false},
        {id: 22, key: 'Underwater', value: false},
        {id: 27, key: 'Urban Exploration', value: false},
        {id: 25, key: 'Wedding', value: false},
      ],
    };
  }

  /**
   * handleFilterToggle
   * @param {*} e
   */
  handleFilterToggle(e) {
    this.setState({
      isFilterByCategory: e.target.checked,
    });
  }

  /**
   * handleCategoryCheck
   * @param {*} e
   */
  handleCategoryCheck(e) {
    const categories = JSON.parse(JSON.stringify(this.state.categories));

    let selected = null;

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id == e.target.name) {
        selected = categories[i];
        selected.value = e.target.checked;
        break;
      }
    }

    this.setState({
      categories,
    });

    if (selected && this.props.onChange) {
      this.props.onChange(selected);
    }
  }

  /**
   * render
   * @return {*}
   */
  render() {
    // TODO
    // use _.forOwn to iterate the filter object and display checkboxes
    return (
      <div className="row">
        <div className="row">
          <input
            type="checkbox"
            onChange={this.handleFilterToggle}
          /> Categories
        </div>
        {
          this.state.isFilterByCategory
          &&
          <div>
          {
            this.state.categories.map((item) => {
              return (
                <div className="category" key={item.key}>
                  <input
                    type="checkbox"
                    name={item.id}
                    checked={item.value}
                    onChange={this.handleCategoryCheck}
                  /> {item.key}
                </div>
              );
            })
          }
          </div>
        }
      </div>
    );
  }
}

SearchCategory.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchCategory;
