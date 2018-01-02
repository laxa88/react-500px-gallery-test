import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import * as actions from '../redux/actions';
import Gallery from './gallery';
import SearchKeywordInput from './search-keyword';
import SearchButton from './search-button';
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
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
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
   * handleClickSearchButton
   * @param {*} e
   */
  handleClickSearchButton(e) {
    const keyword = _.get(this.props, 'state.keyword', null);
    if (keyword) {
      this.props.dispatch(actions.searchGallery(keyword));
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
    const isLoading = _.get(this.props, 'state.isLoading', false);

    // Get the photos array, if property doesn't exist, default to empty array.
    // Note: If the property exists but is invalid, default to empty array.
    const photos = _.get(this.props, 'state.galleryJson.photos', []) || [];

    return (
      <div>
        <SearchKeywordInput onBlur={this.handleSetKeyword} />
        <SearchButton onClick={this.handleClickSearchButton} label="Search" />

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
    keyword: PropTypes.string,
    isLoading: PropTypes.bool,
    galleryJson: PropTypes.objectOf(PropTypes.any),
  }),
};

const mapStateToProps = (state) => (
  {state}
);

export default connect(mapStateToProps)(App);
