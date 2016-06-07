import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from 'reducers/';

// create a store that combines reducers with the router reducers
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

export default store;
