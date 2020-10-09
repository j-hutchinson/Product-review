import { shallow } from 'enzyme';
import React from 'react';
import store from '../../store/store';
import App from './component';

jest.mock('../../store/store', () => ({ dispatch: jest.fn(), }));

describe('App component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  test('component matches snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Multiple Button onClick prop triggers store update', () => {
    expect.assertions(2);

    const wrapper = shallow(<App />);
    wrapper.find('.multiple-button').props().onClick();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      comments: expect.any(Object),
      type: "ADD_MULTIPLE_COMMENTS"
    });
  });

  test('Clear Button onClick prop triggers store update', () => {
    expect.assertions(2);

    const wrapper = shallow(<App />);
    wrapper.find('.clear-button').props().onClick();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "DELETE_COMMENTS"
    });
  });
});