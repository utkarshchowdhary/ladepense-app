import { createStore, combineReducers } from 'redux';
import depensesReducer from '../reducers/depenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      depenses: depensesReducer,
      filters: filtersReducer,
    })
  );

  return store;
};
