const items = state => {
  return state.items;
};

const byId = id => state => {
  return state.items.find(i => i.id === id);
};

const activeItems = state => {
  return state.items.fiter(i => !i.isComplete);
};

const completeItems = state => {
  return state.items.find(i => i.isComplete);
};

export { items, byId, activeItems, completeItems };
