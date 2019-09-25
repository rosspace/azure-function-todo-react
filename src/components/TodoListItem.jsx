import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { operations } from '../redux/items';

const TodoListItem = props => {
  const [secondary, setSecondary] = useState(false);

  const handleToggle = e => {
    props.updateItem(props.item.id, {
      description: props.item.description,
      isComplete: e.target.checked,
    });
  };

  const handleDelete = () => {
    props.deleteItem(props.item.id);
  };

  return (
    <ListItem
      key={props.item.id}
      button
      divider
      onClick={() => setSecondary(!secondary)}
    >
      <ListItemText
        primary={props.item.name}
        secondary={secondary ? props.item.description : null}
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleToggle}
          checked={props.item.isComplete}
          inputProps={{
            'aria-labelledby': `checkbox-list-secondary-label-${props.item.id}`,
          }}
        />
        <IconButton
          onClick={handleDelete}
          aria-label={`delete item ${props.item.name}`}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect(
  () => {
    return {};
  },
  {
    deleteItem: operations.deleteItem,
    updateItem: operations.updateItem,
  }
)(TodoListItem);
