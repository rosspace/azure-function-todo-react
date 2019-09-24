import actions from './actions';

const listItems = () => dispatch => {
  return dispatch(actions.listItems());
};

const updateItem = (id, patch) => dispatch => {
  return dispatch(actions.updateItem(id, patch));
};

export { listItems, updateItem };
