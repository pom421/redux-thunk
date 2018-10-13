import React, { Component } from 'react';
import './App.css';

import Search from "./components/Search"
import ListRepos from "./components/ListRepos"

import reducers from "./redux/reducers"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk))
)
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Search />
          <ListRepos />
        </div>

      </Provider>
    );
  }
}

export default App;
