import { addDepense, editDepense, removeDepense } from '../../actions/depenses';

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
  const depenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent',
  };
  const action = addDepense(depenseData);
  expect(action).toEqual({
    type: 'ADD_DEPENSE',
    depense: {
      ...depenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add depense action object with default values', () => {
  const action = addDepense();
  expect(action).toEqual({
    type: 'ADD_DEPENSE',
    depense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String),
    },
  });
});
