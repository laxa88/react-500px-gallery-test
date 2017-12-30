import React from 'react';
import {Link, Route} from 'react-router-dom';

import Home from './home';
import Search from './search';

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
    </div>
  </div>
);

export default App;
