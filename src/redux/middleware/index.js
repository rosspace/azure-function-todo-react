import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

const middleware = [thunk, apiMiddleware];
export default middleware;
