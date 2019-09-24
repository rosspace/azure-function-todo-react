import types from './types';

const getAuthRequest = () => ({
  type: types.LOGIN.REQUEST,
});

const getAuthSuccess = key => ({
  type: types.LOGIN.SUCCESS,
  payload: key,
});

const getAuthFailure = () => ({
  type: types.LOGIN.FAILURE,
});

export default {
  getAuthFailure,
  getAuthRequest,
  getAuthSuccess,
};
