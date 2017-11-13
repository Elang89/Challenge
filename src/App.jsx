import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Home from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
