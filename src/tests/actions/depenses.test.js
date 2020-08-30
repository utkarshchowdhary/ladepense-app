import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddDepense,
  addDepense,
  editDepense,
  removeDepense,
} from '../../actions/depenses';
import depenses from '../fixtures/depenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove depense action object', () => {
  const action = removeDepense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_DEPENSE',
    id: '123abc',
  });
});

test('should setup edit depense action object', () => {
  const action = editDepense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_DEPENSE',
    id: '123abc',
    updates: {
      note: 'New note value',
    },
  });
});

test('should setup add depense action object with provided values', () => {
  const action = addDepense(depenses[2]);
  expect(action).toEqual({
    type: 'ADD_DEPENSE',
    depense: depenses[2],
  });
});

test('should add depense to database and store', async () => {
  const store = createMockStore({});
  const depenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000,
  };
  await store.dispatch(startAddDepense(depenseData));

  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_DEPENSE',
    depense: {
      id: expect.any(String),
      ...depenseData,
    },
  });
  const snapshot = await database
    .ref(`depenses/${actions[0].depense.id}`)
    .once('value');

  expect(snapshot.val()).toEqual(depenseData);
});

test('should add depense with defaults to database and store', async () => {
  const store = createMockStore({});
  const depenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
  };
  await store.dispatch(startAddDepense());

  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_DEPENSE',
    depense: {
      id: expect.any(String),
      ...depenseDefaults,
    },
  });
  const snapshot = await database
    .ref(`depenses/${actions[0].depense.id}`)
    .once('value');

  expect(snapshot.val()).toEqual(depenseDefaults);
});
