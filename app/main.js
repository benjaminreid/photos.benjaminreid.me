import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store';
import App from 'components/app';
import Containers from 'containers/';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Containers.IndexContainer}/>
        <Route path="/collection/:collectionId" component={Containers.CollectionContainer}/>
        <Route path="/collection/:collectionId/:photoId" component={Containers.CollectionContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#react-root')
);
