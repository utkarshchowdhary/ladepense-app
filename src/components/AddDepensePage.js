import React from 'react';
import { connect } from 'react-redux';
import { startAddDepense } from '../actions/depenses';
import DepenseForm from './DepenseForm';

export class AddDepensePage extends React.Component {
  onSubmit = (depense) => {
    this.props.startAddDepense(depense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Depense</h1>
        <DepenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddDepense: (depense) => dispatch(startAddDepense(depense)),
});

export default connect(undefined, mapDispatchToProps)(AddDepensePage);
