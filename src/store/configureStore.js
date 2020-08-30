import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import depensesReducer from '../reducers/depenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      depenses: depensesReducer,
      filters: filtersReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
