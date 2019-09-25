import actions from './actions';
import { TodoItemFilters } from '../../constants';

const addItem = newItem => dispatch => {
  return dispatch(actions.addItem(newItem));
};

const deleteItem = id => dispatch => {
  return dispatch(actions.deleteItem(id));
};

const fetchItems = filter => dispatch => {
  switch (filter) {
    case TodoItemFilters.NOT_COMPLETE: {
      return dispatch(actions.queryItems(false));
    }
    case TodoItemFilters.IS_COMPLETE: {
      return dispatch(actions.queryItems(true));
    }
    default: {
      return dispatch(actions.listItems());
    }
  }
};

const updateItem = (id, patch) => dispatch => {
  return dispatch(actions.updateItem(id, patch));
};

const setFilter = filter => dispatch => {
  return dispatch(actions.setFilter(filter));
};

export { addItem, deleteItem, fetchItems, updateItem, setFilter };
