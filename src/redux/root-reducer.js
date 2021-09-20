import { combineReducers } from 'redux';

import userReducer from './user/reducer.js';
import cartReducer from './cart/reducer.js';


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;
