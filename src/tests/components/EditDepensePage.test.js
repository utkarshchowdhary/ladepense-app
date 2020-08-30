import React from 'react';
import { shallow } from 'enzyme';
import { EditDepensePage } from '../../components/EditDepensePage';
import depenses from '../fixtures/depenses';

let editDepense, startRemoveDepense, history, wrapper;

beforeEach(() => {
  editDepense = jest.fn();
  startRemoveDepense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditDepensePage
      editDepense={editDepense}
      startRemoveDepense={startRemoveDepense}
      history={history}
      depense={depenses[2]}
    />
  );
});

test('should render EditDepensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editDepense', () => {
  wrapper.find('DepenseForm').prop('onSubmit')(depenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editDepense).toHaveBeenLastCalledWith(depenses[2].id, depenses[2]);
});

test('should handle startRemoveDepense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveDepense).toHaveBeenLastCalledWith(depenses[2].id);
});
