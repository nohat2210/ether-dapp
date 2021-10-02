import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from 'pages/auth/authSlice';
import products from 'pages/market-place/productSlice';
import user from 'pages/user/userSlice';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    products,
    user,
  });

export default rootReducer;
