import types from './types';

const auth = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN.SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default auth;
