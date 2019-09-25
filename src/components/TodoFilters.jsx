import React from 'react';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { operations, selectors } from '../redux/items';
import { TodoItemFilters } from '../constants';

const TodoFilters = props => {
  const handleChange = event => {
    props.setFilter(event.target.value);
    props.fetchItems(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Todo List Filters</FormLabel>
      <RadioGroup
        aria-label="Todo List Filters"
        name="todoFilter"
        value={props.filter}
        onChange={handleChange}
      >
        <FormControlLabel
          value={TodoItemFilters.ALL}
          control={<Radio />}
          label="No Filter"
        />
        <FormControlLabel
          value={TodoItemFilters.NOT_COMPLETE}
          control={<Radio />}
          label="Not Completed"
        />
        <FormControlLabel
          value={TodoItemFilters.IS_COMPLETE}
          control={<Radio />}
          label="Completed"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default connect(
  state => {
    return {
      filter: selectors.filter(state),
    };
  },
  {
    fetchItems: operations.fetchItems,
    setFilter: operations.setFilter,
  }
)(TodoFilters);
