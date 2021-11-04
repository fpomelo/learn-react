import { combineReducers } from 'redux';
import countReducer from './count';
import personReducer from './person';

const allReducer = combineReducers({
  count: countReducer, 
  persons: personReducer,
});

export default allReducer;
