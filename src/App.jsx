import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import rootReducer from './reducers';
import Main from './components/Main.jsx';
import * as Pages from './pages';

const loggerMiddleware = createLogger();
const store = createStore(
  //rootReducer,
  applyMiddleware(
  	thunkMiddleware,
    loggerMiddleware
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={window.cordova?hashHistory:browserHistory}>
          <Route path="" component={Main}>
            <Route path="/" component={Pages.Home} />
            <Route path="test" component={Pages.Test} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

window.startApp = function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

if(!window.cordova) window.startApp();
