// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/index'
// import thunk from 'redux-thunk';

// const initialState = {};
// const middlewares = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middlewares),
// );

// export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducers'
// import thunk from 'redux-thunk';

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;