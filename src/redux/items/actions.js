import { RSAA } from 'redux-api-middleware';
import types from './types';

const listTodos = () => {
  const url = 'https://avantia-todo.azure-api.net/avantia-todo/items';
  return {
    [RSAA]: {
      endpoint: url,
      method: 'GET',
      headers: {
        ...RSAA,
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.TODO_API_KEY,
      },
      types: [
        types.LIST_ITEMS.REQUEST,
        types.LIST_ITEMS.SUCCESS,
        types.LIST_ITEMS.FAILURE,
      ],
    },
  };
};

export default { listTodos };
