import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import * as actions from '../redux/actions';
import Gallery from './gallery';
import SearchKeyword from './search-keyword';

/**
 * App
 */
class App extends React.Component {
  /**
   * componentDidMount
   */
  componentDidMount() {
    this.props.dispatch(actions.loadDefaultGallery());
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
        <SearchKeyword />
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
    isLoading: PropTypes.bool,
    galleryJson: PropTypes.objectOf(PropTypes.any),
  }),
};

const mapStateToProps = (state) => (
  {state}
);

export default connect(mapStateToProps)(App);
