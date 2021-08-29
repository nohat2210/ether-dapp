import { combineReducers } from 'redux';
import auth from 'pages/auth/authSlice';

const rootReducer = combineReducers({ auth });

export default rootReducer;
