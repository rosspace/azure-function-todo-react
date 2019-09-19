import types from './types';

const items = (state = [], action) => {
  switch (action.type) {
    case types.LIST_ITEMS.SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default items;
