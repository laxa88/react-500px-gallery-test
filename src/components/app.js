import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../redux/actions';
import Gallery from './gallery';
import SearchKeywordInput from './search-keyword';
import Button from './button';
import SearchCategory from './search-category';
import Pagination from './pagination';
import * as G from '../constants';

/**
 * App
 */
class App extends React.Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.handleSetKeyword = this.handleSetKeyword.bind(this);
    this.handleClickHomeButton = this.handleClickHomeButton.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleCheckCategory = this.handleCheckCategory.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
  }

  /**
   * handleSetKeyword
   * @param {string} keyword
   */
  handleSetKeyword(keyword) {
    if (this.props.state.keyword !== keyword) {
      this.props.dispatch(actions.setSearchKeyword(keyword));
    }
  }

  /**
   * handleClickHomeButton
   */
  handleClickHomeButton() {
    this.props.dispatch(actions.setPageNumber(1));
    this.props.dispatch(actions.loadGallery());
  }

  /**
   * handleClickSearchButton
   */
  handleClickSearchButton() {
    const {categories, keyword} = this.props.state;

    this.props.dispatch(actions.setPageNumber(1));
    this.props.dispatch(actions.searchGallery(keyword, categories));
  }

  /**
   * handleCheckCategory
   * @param {object} category
   * @param {string} category.key
   * @param {bool} category.value
   */
  handleCheckCategory(category) {
    this.props.dispatch(
      actions.setCategory(category.key, category.value)
    );
  }

  /**
   * handleClickPage
   * @param {number} pageNumber
   */
  handleClickPage(pageNumber) {
    const {galleryType, categories, keyword, isLoading} = this.props.state;

    if (isLoading) {
      return;
    }

    this.props.dispatch(actions.setPageNumber(pageNumber));

    switch (galleryType) {
      case G.SEARCH: {
        this.props.dispatch(actions.searchGallery(
          keyword,
          categories,
          pageNumber
        ));
      }
      break;

      case G.DEFAULT:
      default: {
        this.props.dispatch(actions.loadGallery(
          categories,
          pageNumber
        ));
      }
      break;
    }
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.props.dispatch(actions.loadGallery());
  }

  /**
   * @return {*}
   */
  render() {
    const isLoading = this.props.state.isLoading;

    // Get the photos array, if property doesn't exist, default to empty array.
    // Note: If the property exists but is invalid, default to empty array.
    const photos = this.props.state.galleryJson.photos || [];

    const pageNumber = this.props.state.pageNumber;

    return (
      <div className="row">
        <SearchKeywordInput onBlur={this.handleSetKeyword} />
        <SearchCategory onChange={this.handleCheckCategory} />
        <Button onClick={this.handleClickHomeButton} label="Home" />
        <Button onClick={this.handleClickSearchButton} label="Search" />
        <Pagination page={pageNumber} onClick={this.handleClickPage} />

        { isLoading
          ?
          <div>Loading...</div>
          :
          <Gallery photos={photos} />
        }
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    galleryType: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    keyword: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    galleryJson: PropTypes.objectOf(PropTypes.any).isRequired,
  }),
};

const mapStateToProps = (state) => (
  {state}
);

export default connect(mapStateToProps)(App);
