import { RSAA } from 'redux-api-middleware';
import types from './types';
import config from '../../config';

const addItem = newItem => {
  const url = config.api.itemsBase;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'POST',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
      types: [
        types.ADD_ITEM.REQUEST,
        types.ADD_ITEM.SUCCESS,
        types.ADD_ITEM.FAILURE,
      ],
    },
  };
};

const deleteItem = id => {
  const url = `${config.api.itemsBase}/${id}`;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'DELETE',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      types: [
        types.DELETE_ITEM.REQUEST,
        types.DELETE_ITEM.SUCCESS,
        types.DELETE_ITEM.FAILURE,
      ],
    },
  };
};

const getItem = id => {
  const url = `${config.api.itemsBase}/${id}`;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'GET',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      types: [
        types.GET_ITEM.REQUEST,
        types.GET_ITEM.SUCCESS,
        types.GET_ITEM.FAILURE,
      ],
    },
  };
};

const queryItems = isComplete => {
  const url = `${config.api.queryBase}${isComplete ? 'true' : 'false'}`;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'GET',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      types: [
        types.QUERY_ITEMS.REQUEST,
        types.QUERY_ITEMS.SUCCESS,
        types.QUERY_ITEMS.FAILURE,
      ],
    },
  };
};

const listItems = () => {
  const url = config.api.itemsBase;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'GET',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      types: [
        types.LIST_ITEMS.REQUEST,
        types.LIST_ITEMS.SUCCESS,
        types.LIST_ITEMS.FAILURE,
      ],
    },
  };
};

const updateItem = (id, updates) => {
  const url = `${config.api.itemsBase}/${id}`;
  return {
    [RSAA]: {
      endpoint: url,
      method: 'PATCH',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
      types: [
        types.UPDATE_ITEM.REQUEST,
        types.UPDATE_ITEM.SUCCESS,
        types.UPDATE_ITEM.FAILURE,
      ],
    },
  };
};

const setFilter = filter => ({
  type: types.SET_FILTER,
  payload: filter,
});

export default {
  addItem,
  deleteItem,
  getItem,
  queryItems,
  listItems,
  updateItem,
  setFilter,
};
