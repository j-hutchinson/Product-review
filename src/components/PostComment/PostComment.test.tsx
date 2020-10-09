import { shallow } from 'enzyme';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PostComment, { StyledInput, StyledContainer } from './component';
import store from '../../store/store'

jest.mock('../../store/store', () => ({ dispatch: jest.fn(), }));

describe('PostComment component', () => {
    const preventDefault = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<PostComment />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with valid Comment object', () => {
        expect.assertions(2);

        const wrapper = shallow(<PostComment />);

        wrapper.find(StyledInput).at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find(StyledInput).at(1).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find(Rating).props().onChange({}, 4);
        wrapper.find(StyledInput).at(2).simulate('change', { target: { value: 'This is a good product' } });
        wrapper.find(StyledContainer).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({
            comment: {
                name: 'Jack Hutchinson',
                email: 'email@email.com',
                rating: 4,
                comment: 'This is a good product'
            },
            type: "ADD_COMMENT"
        });
    });
});
