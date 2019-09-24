import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Checkbox } from '@material-ui/core';

import { operations } from '../redux/items';

const TodoListItem = props => {
  const [secondary, setSecondary] = useState(false);

  const handleToggle = e => {
    props.updateItem(props.item.id, {
      description: props.item.description,
      isComplete: e.target.checked,
    });
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
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect(
  () => {
    return {};
  },
  { updateItem: operations.updateItem }
)(TodoListItem);
