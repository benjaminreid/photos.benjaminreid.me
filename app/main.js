import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store';
import App from 'components/app';
import Index from 'views/index';
import Collection from 'views/collection';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/collection/:collectionId" component={Collection}/>
        <Route path="/collection/:collectionId/:photoId" component={Collection}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#react-root')
);
