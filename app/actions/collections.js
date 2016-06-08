export const LOADED_COLLECTIONS = 'LOADED_COLLECTIONS';

export function loadedCollections(payload) {
  return {
    type: LOADED_COLLECTIONS,
    payload
  }
}

export function getCollections() {
  return function (dispatch) {
    return fetch('/api/collections.json')
      .then(response => response.json())
      .then((json) => {
        dispatch(loadedCollections(json));
      })
  };
}
