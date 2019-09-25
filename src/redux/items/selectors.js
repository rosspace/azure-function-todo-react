import { TodoItemFilters } from '../../constants';

const items = state => {
  switch (state.items.filter) {
    case TodoItemFilters.NOT_COMPLETE: {
      return state.items.data.filter(i => !i.isComplete);
    }
    case TodoItemFilters.IS_COMPLETE: {
      return state.items.data.filter(i => i.isComplete);
    }
    default: {
      return state.items.data;
    }
  }
};

const byId = id => state => {
  return state.items.data.find(i => i.id === id);
};

const filter = state => {
  return state.items.filter;
};

export { items, byId, filter };
