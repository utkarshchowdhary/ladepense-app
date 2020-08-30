import React from 'react';
import { connect } from 'react-redux';
import { editDepense, startRemoveDepense } from '../actions/depenses';
import DepenseForm from './DepenseForm';

export class EditDepensePage extends React.Component {
  onSubmit = (depense) => {
    this.props.editDepense(this.props.depense.id, depense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveDepense(this.props.depense.id);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <DepenseForm depense={this.props.depense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  depense: state.depenses.find(
    (depense) => depense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editDepense: (id, depense) => dispatch(editDepense(id, depense)),
  startRemoveDepense: (id) => dispatch(startRemoveDepense({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDepensePage);
