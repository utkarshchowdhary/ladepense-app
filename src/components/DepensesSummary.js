import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectDepenses from '../selectors/depenses';
import selectDepensesTotal from '../selectors/depenses-total';

export const DepensesSummary = ({ depenseCount, depensesTotal }) => {
  const depenseWord = depenseCount === 1 ? 'depense' : 'depenses';
  const formattedDepensesTotal = numeral(depensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {depenseCount} {depenseWord} totalling {formattedDepensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleDepenses = selectDepenses(state.depenses, state.filters);

  return {
    depenseCount: visibleDepenses.length,
    depensesTotal: selectDepensesTotal(visibleDepenses),
  };
};

export default connect(mapStateToProps)(DepensesSummary);
