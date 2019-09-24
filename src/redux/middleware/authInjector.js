import { RSAA } from 'redux-api-middleware';
import { getAuth } from '../auth/selectors';

const authInjector = store => next => action => {
  const rsaa = action[RSAA];

  if (!rsaa || rsaa.credentials === 'omit') return next(action);

  const token = getAuth(store.getState());

  if (!token) throw new Error('Unable to read token');

  rsaa.headers = Object.assign({}, rsaa.headers, {
    'Ocp-Apim-Subscription-Key': token,
  });

  return next(action);
};

export default authInjector;
