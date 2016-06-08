import { LOADED_COLLECTIONS } from 'actions/collections';

const store = function(state = [], action) {
  switch(action.type) {
    case LOADED_COLLECTIONS:
      return [...action.payload];
  }

  return state;
};

export default store;
