import { combineReducers } from 'redux';
import produce from 'immer';

import types from './types';
import { TodoItemFilters } from '../../constants';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ITEM.SUCCESS: {
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
      };
    }
    case types.DELETE_ITEM.SUCCESS: {
      return {
        ...state,
        [action.payload.data]: null,
      };
    }
    case types.GET_ITEM.SUCCESS: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.QUERY_ITEMS.SUCCESS:
    case types.LIST_ITEMS.SUCCESS: {
      const items = {};
      action.payload.forEach(i => {
        items[i.id] = i;
      });
      return items;
    }
    case types.UPDATE_ITEM.SUCCESS: {
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

const allIds = produce((draft, action) => {
  switch (action.type) {
    case types.ADD_ITEM.SUCCESS: {
      draft.push(action.payload.data.id);
      return;
    }
    case types.DELETE_ITEM.SUCCESS: {
      const i = draft.indexOf(action.payload.data);
      if (i === -1) return;
      draft.splice(i, 1);
      return;
    }
    case types.GET_ITEM.SUCCESS: {
      if (draft.indexOf(action.payload.id) > -1) {
        return;
      }
      // not in current list so add it
      draft.push(action.payload.id);
      return;
    }
    case types.QUERY_ITEMS.SUCCESS:
    case types.LIST_ITEMS.SUCCESS: {
      return action.payload.map(i => i.id);
    }
    default:
  }
}, []);

const filter = produce((draft, action) => {
  if (action.type === types.SET_FILTER) {
    return action.payload;
  }

  return draft;
}, TodoItemFilters.ALL);

export default combineReducers({
  byId,
  allIds,
  filter,
});
