import {combineReducers} from 'redux';
import mainReducer from '../reducers/mainReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  mainReducer,
});

export default rootReducer;
