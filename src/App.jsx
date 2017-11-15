import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import Feed from './containers/FeedContainer';
import Home from './containers/HomeContainer';

import './App.css';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Feed} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
