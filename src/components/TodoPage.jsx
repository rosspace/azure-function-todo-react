import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { selectors, operations } from '../redux/items';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

class TodoListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TodoList items={this.props.items} />
        </Grid>
        <Grid item xs={4}>
          <TodoFilters />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const items = selectors.items(state);
  const filter = selectors.filter(state);
  return { items, filter };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchItems: operations.fetchItems,
    }
  )(TodoListPage)
);
