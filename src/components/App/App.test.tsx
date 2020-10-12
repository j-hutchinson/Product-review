import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { StoreContext } from '../../store/StoreProvider';
import App from './component';

describe('App component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  test('component matches snapshot', () => {
    expect.assertions(1);

    const wrapper = render(
      <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: [] } }}>
        <App />
      </StoreContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Multiple Button onClick prop triggers store update', () => {
    expect.assertions(2);

    const dispatch = jest.fn();
    const { getByText } = render(
      <StoreContext.Provider value={{ dispatch, state: { allComments: [] } }}>
        <App />
      </StoreContext.Provider>
    );
    const button = getByText('Use mock data')
    fireEvent.click(button)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      comments: expect.any(Object),
      type: "ADD_MULTIPLE_COMMENTS"
    });
  });

  test('Clear Button onClick prop triggers store update', () => {
    expect.assertions(2);

    const dispatch = jest.fn();
    const { getByText } = render(
      <StoreContext.Provider value={{ dispatch, state: { allComments: [] } }}>
        <App />
      </StoreContext.Provider>
    );
    const button = getByText('Clear')
    fireEvent.click(button)

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "DELETE_COMMENTS"
    });
  });
});