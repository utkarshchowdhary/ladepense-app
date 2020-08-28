const { v4: uuidv4 } = require('uuid');

export const addDepense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_DEPENSE',
  depense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeDepense = ({ id } = {}) => ({
  type: 'REMOVE_DEPENSE',
  id,
});

export const editDepense = (id, updates) => ({
  type: 'EDIT_DEPENSE',
  id,
  updates,
});
