import { shallow } from 'enzyme';
import React from 'react';
import { mockData } from '../../data/mockData';
import { App, mapDispatchToProps } from './component';

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

  test('returns correct `props`', () => {
    expect.assertions(1);

    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(props).toEqual({
      addComments: expect.any(Function),
      deleteComments: expect.any(Function),
    });
  });

  test('`addComments` calls dispatch with correct type', () => {
    expect.assertions(2);

    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.addComments();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ "type": "ADD_MULTIPLE_COMMENTS", comments: mockData });
  });

  test('`deleteComments` calls dispatch with correct type', () => {
    expect.assertions(2);

    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.deleteComments();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ "type": "DELETE_COMMENTS" });
  });
});