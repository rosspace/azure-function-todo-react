import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = props => {
  return (
    <List>
      {props.items.map(i => (
        <TodoListItem key={i.id} item={i} />
      ))}
      <ListItem key="add-new-item">
        <AddTodo />
      </ListItem>
    </List>
  );
};

export default TodoList;
