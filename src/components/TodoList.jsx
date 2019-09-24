import React from 'react';
import List from '@material-ui/core/List';

import TodoListItem from './TodoListItem';

const TodoList = props => {
  return (
    <List>
      {props.items.map(i => (
        <TodoListItem key={i.id} item={i} />
      ))}
    </List>
  );
};

export default TodoList;
