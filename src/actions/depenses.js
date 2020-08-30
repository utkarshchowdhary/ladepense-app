import database from '../firebase/firebase';

export const addDepense = (depense) => ({
  type: 'ADD_DEPENSE',
  depense,
});

export const startAddDepense = (depenseData = {}) => {
  return async (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = depenseData;
    const depense = { description, note, amount, createdAt };

    const ref = await database.ref('depenses').push(depense);
    dispatch(
      addDepense({
        id: ref.key,
        ...depense,
      })
    );
  };
};

export const removeDepense = ({ id } = {}) => ({
  type: 'REMOVE_DEPENSE',
  id,
});

export const editDepense = (id, updates) => ({
  type: 'EDIT_DEPENSE',
  id,
  updates,
});

export const setDepenses = (depenses) => ({
  type: 'SET_DEPENSES',
  depenses,
});

export const startSetDepenses = () => {
  return async (dispatch) => {
    const snapshot = await database.ref('depenses').once('value');
    const depenses = [];

    snapshot.forEach((childSnapshot) => {
      depenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    dispatch(setDepenses(depenses));
  };
};
