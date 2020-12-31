import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import eventReducer from './reducers/eventReducer';
import criteriaReducer from './reducers/criteriaReducer';
import { database } from './middlewares/database';


const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  criteria: criteriaReducer
});

const store = createStore(rootReducer, applyMiddleware(database));


export default store;