import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import * as actions from '../redux/actions';
import Home from './home';
import Search from './search';

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
    // Get the photos array, if property doesn't exist, default to empty array.
    // Note: If the property exists but is invalid, default to empty array.
    const photos = _.get(this.props, 'state.galleryJson.photos', []) || [];

    return (
      <div>
        <ul>
        { photos.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} width='100' height='100' />
          </li>
        ))}
        </ul>
        <Home></Home>
        <Search></Search>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {state}
);

export default connect(mapStateToProps)(App);
