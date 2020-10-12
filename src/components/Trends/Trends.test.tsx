import { render } from '@testing-library/react';
import React from 'react';
import { multipleComments } from '../../__fixtures__/comment';
import { Trends } from './component';
import { StoreContext } from '../../store/StoreProvider'

describe('Trends component', () => {
    test('component matches snapshot with ratings', () => {
        expect.assertions(1);

        const wrapper = render(
            <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: multipleComments } }}>
                <Trends />
            </StoreContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('component matches snapshot with no ratings', () => {
        expect.assertions(1);

        const wrapper = render(
            <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: [] } }}>
                <Trends />
            </StoreContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});