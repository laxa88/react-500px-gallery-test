import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
    console.log(this);
    return (
      <div>
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
