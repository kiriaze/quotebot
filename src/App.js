import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { loadUser } from './actions/auth'
import { Provider } from 'react-redux'
import store from './store.js'

import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'

import './App.scss';

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
