import { shallow } from 'enzyme';
import React from 'react';
import { App } from './component';

describe('App component', () => {
  const addComments = jest.fn();
  const deleteComments = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('component matches snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<App addComments={addComments} deleteComments={deleteComments} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Multiple Button onClick prop triggers store update', () => {
    expect.assertions(1);

    const wrapper = shallow(<App addComments={addComments} deleteComments={deleteComments} />);
    wrapper.find('.multiple-button').props().onClick();

    expect(addComments).toHaveBeenCalledTimes(1);
  });

  test('Clear Button onClick prop triggers store update', () => {
    expect.assertions(1);

    const wrapper = shallow(<App addComments={addComments} deleteComments={deleteComments} />);
    wrapper.find('.clear-button').props().onClick();

    expect(deleteComments).toHaveBeenCalledTimes(1);
  });
});