import React from 'react';
import { connect } from 'react-redux';
import DepenseListItem from './DepenseListItem';
import selectDepenses from '../selectors/depenses';

export const DepenseList = (props) => (
  <div>
    {props.depenses.length === 0 ? (
      <p>No depenses</p>
    ) : (
      props.depenses.map((depense) => (
        <DepenseListItem key={depense.id} {...depense} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => ({
  depenses: selectDepenses(state.depenses, state.filters),
});

export default connect(mapStateToProps)(DepenseList);
