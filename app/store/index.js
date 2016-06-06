import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const collections = function(state = [1, 2, 3, 4], action) {
  return state;
}

const reducers = {
  collections
};

// create a store that combines reducers with the router reducers
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

export default store;
