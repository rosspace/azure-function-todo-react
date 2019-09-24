import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { selectors, operations } from './redux/auth';
import TodoPage from './components/TodoPage';

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
        <Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <TodoPage />
          </Container>
        </Fragment>
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
