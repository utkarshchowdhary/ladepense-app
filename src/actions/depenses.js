import database from '../firebase/firebase';

export const addDepense = (depense) => ({
  type: 'ADD_DEPENSE',
  depense,
});

export const startAddDepense = (depenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = depenseData;
    const depense = { description, note, amount, createdAt };

    return database
      .ref('depenses')
      .push(depense)
      .then((ref) => {
        dispatch(
          addDepense({
            id: ref.key,
            ...depense,
          })
        );
      });
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
