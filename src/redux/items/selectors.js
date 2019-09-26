import { TodoItemFilters } from '../../constants';

const byId = id => state => {
  return state.items.byId[id];
};

const items = state => {
  const itemList = state.items.allIds.map(id => byId(id)(state));
  switch (state.items.filter) {
    case TodoItemFilters.NOT_COMPLETE: {
      return itemList.filter(i => !i.isComplete);
    }
    case TodoItemFilters.IS_COMPLETE: {
      return itemList.filter(i => i.isComplete);
    }
    default: {
      return itemList;
    }
  }
};

const filter = state => {
  return state.items.filter;
};

export { items, byId, filter };
