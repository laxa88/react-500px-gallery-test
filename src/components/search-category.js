import React from 'react';

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

    this.state = {
      isFilterByCategory: false,
      filters: {
        'Uncategorized': false,
        'Abstract': false,
        'Aerial': false,
        'Animals': false,
        'Black and White': false,
        'Celebrities': false,
        'City and Architecture': false,
        'Commercial': false,
        'Concert': false,
        'Family': false,
        'Fashion': false,
        'Film': false,
        'Fine Art': false,
        'Food': false,
        'Journalism': false,
        'Landscapes': false,
        'Macro': false,
        'Nature': false,
        'Night': false,
        'Nude': false,
        'People': false,
        'Performing Arts': false,
        'Sport': false,
        'Still Life': false,
        'Street': false,
        'Transportation': false,
        'Travel': false,
        'Underwater': false,
        'Urban Exploration': false,
        'Wedding': false,
      },
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
   * render
   * @return {*}
   */
  render() {
    // TODO
    // use _.forOwn to iterate the filter object and display checkboxes
    return (
      <div>
        <p>
          <input
            name="isGoing"
            type="checkbox"
            onChange={this.handleFilterToggle}
          />
          Filter by category
        </p>
        {
          this.state.isFilterByCategory
          &&
          <div>categories</div>
        }
      </div>
    );
  }
}

export default SearchCategory;
