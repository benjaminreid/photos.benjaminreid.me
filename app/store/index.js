import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// create a store that combines reducers with the router reducers
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

export default store;
