/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { selectors, operations } from './redux/auth';
import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    if (this.props.auth) {
      return (
        <Router>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Switch>
                {routes.map((r, i) => (
                  <Route
                    key={`header-${i}`}
                    path={r.path}
                    exact={r.exact}
                    render={() => r.header}
                  />
                ))}
              </Switch>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Switch>
              {routes.map((r, i) => (
                <Route
                  key={`page-${i}`}
                  path={r.path}
                  exact={r.exact}
                  component={r.page}
                />
              ))}
            </Switch>
          </Container>
        </Router>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  const auth = selectors.getAuth(state);
  return { auth };
};

export default connect(
  mapStateToProps,
  { getAuth: operations.getAuth }
)(App);
