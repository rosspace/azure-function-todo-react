import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { selectors, operations } from '../redux/items';
import TodoList from './TodoList';

class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'List todo items example',
    };
  }

  componentDidMount() {
    this.props.listItems();
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.title}</h1>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TodoList items={this.props.items} />
          </Grid>
          <Grid item xs={4}>
            aside
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const items = selectors.items(state);
  return { items };
};

export default connect(
  mapStateToProps,
  { listItems: operations.listItems }
)(TodoListPage);
