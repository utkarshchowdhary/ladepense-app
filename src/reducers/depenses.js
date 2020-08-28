const depensesReducerDefaultState = [];

export default (state = depensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DEPENSE':
      return [...state, action.depense];
    case 'REMOVE_DEPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_DEPENSE':
      return state.map((depense) => {
        if (depense.id === action.id) {
          return {
            ...depense,
            ...action.updates,
          };
        } else {
          return depense;
        }
      });
    default:
      return state;
  }
};
