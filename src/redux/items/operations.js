import actions from './actions';

const listTodos = () => dispatch => {
  return dispatch(actions.listTodos());
};

export { listTodos };
