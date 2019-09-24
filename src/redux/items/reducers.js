import produce from 'immer';
import types from './types';

const items = produce((draft, action) => {
  switch (action.type) {
    case types.ADD_ITEM.SUCCESS: {
      draft.push(action.payload);
      return;
    }
    case types.DELETE_ITEM.SUCCESS: {
      return draft.filter(i => i.id === action.data);
    }
    case types.GET_ITEM.SUCCESS: {
      return draft.map(i => {
        if (i.id === action.payload.id) {
          return action.payload;
        }
        return i;
      });
    }
    case types.QUERY_ITEMS.SUCCESS:
    case types.LIST_ITEMS.SUCCESS: {
      return action.payload;
    }
    case types.UPDATE_ITEM.SUCCESS: {
      return draft.map(i => {
        if (i.id === action.payload.data.id) {
          return action.payload.data;
        }
        return i;
      });
    }
    default:
  }
}, []);

export default items;
