import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors, operations } from '../redux/items';

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'List todos example',
    };
  }

  componentDidMount() {
    this.props.listTodos();
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {JSON.stringify(this.props.items)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const items = selectors.listTodos(state);
  return { items };
};

export default connect(
  mapStateToProps,
  { listTodos: operations.listTodos }
)(TodoListComponent);
