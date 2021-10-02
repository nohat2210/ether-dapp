import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from 'store/reducers';

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(routerMiddleware(history));

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
});

export default store;
