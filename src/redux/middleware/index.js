import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import authInjector from './authInjector';

const middleware = [thunk, authInjector, apiMiddleware];
export default middleware;
