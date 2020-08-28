import React from 'react';
import { connect } from 'react-redux';
import { addDepense } from '../actions/depenses';
import DepenseForm from './DepenseForm';

export class AddDepensePage extends React.Component {
  onSubmit = (depense) => {
    this.props.addDepense(depense);
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
  addDepense: (depense) => dispatch(addDepense(depense)),
});

export default connect(undefined, mapDispatchToProps)(AddDepensePage);
