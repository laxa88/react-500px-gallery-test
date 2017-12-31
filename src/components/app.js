import React from 'react';
import {connect} from 'react-redux';

import Home from './home';
import Search from './search';

/**
 * App
 */
class App extends React.Component {
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

const mapStateToProps = (state) => (
  {state}
);

export default connect(mapStateToProps)(App);
