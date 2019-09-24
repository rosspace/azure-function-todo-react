import actions from './actions';
import config from '../../config';

const getAuth = () => async dispatch => {
  dispatch(actions.getAuthRequest());

  try {
    const response = await fetch(config.api.login);
    const key = response.headers.get('auth-key');
    dispatch(actions.getAuthSuccess(key));
  } catch (ex) {
    console.error(ex);
    dispatch(actions.getAuthFailure());
  }
};

export { getAuth };
