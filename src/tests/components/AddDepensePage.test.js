import React from 'react';
import { shallow } from 'enzyme';
import { AddDepensePage } from '../../components/AddDepensePage';
import depenses from '../fixtures/depenses';

let addDepense, history, wrapper;

beforeEach(() => {
  addDepense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddDepensePage addDepense={addDepense} history={history} />
  );
});

test('should render AddDepensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('DepenseForm').prop('onSubmit')(depenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addDepense).toHaveBeenLastCalledWith(depenses[1]);
});
