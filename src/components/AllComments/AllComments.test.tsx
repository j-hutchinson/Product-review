import { render } from '@testing-library/react';
import React from 'react';
import { multipleComments, singleComment } from '../../__fixtures__/comment';
import { AllComments, } from './component';
import { StoreContext } from '../../store/StoreProvider';

describe('AllComments component', () => {
    test('component matches snapshot with 1 comment', () => {
        expect.assertions(1);

        const wrapper = render(
            <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: [singleComment] } }}>
                <AllComments />
            </StoreContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('component matches snapshot with multiple comments', () => {
        expect.assertions(1);

        const wrapper = render(
            <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: multipleComments } }}>
                <AllComments />
            </StoreContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('component matches snapshot with no comments', () => {
        expect.assertions(1);

        const wrapper = render(
            <StoreContext.Provider value={{ dispatch: jest.fn(), state: { allComments: [] } }}>
                <AllComments />
            </StoreContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});