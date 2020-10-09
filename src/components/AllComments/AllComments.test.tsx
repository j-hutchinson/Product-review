import { shallow } from 'enzyme';
import React from 'react';
import { ReduxState } from '../../types';
import { multipleComments, singleComment } from '../../__fixtures__/comment';
import IndividualComment from '../IndividualComment/component';
import { AllComments, mapStateToProps, StyledEmptyLabel } from './component';

describe('AllComments component', () => {
    test('component matches snapshot with 1 comment', () => {
        expect.assertions(2);

        const wrapper = shallow(<AllComments allComments={[singleComment]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(IndividualComment)).toHaveLength(1);
    });

    test('component matches snapshot with multiple comment', () => {
        expect.assertions(2);

        const wrapper = shallow(<AllComments allComments={multipleComments} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(IndividualComment)).toHaveLength(4);
    });

    test('component matches snapshot with no comments', () => {
        expect.assertions(3);

        const wrapper = shallow(<AllComments allComments={[]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(IndividualComment)).toHaveLength(0);
        expect(wrapper.find(StyledEmptyLabel)).toHaveLength(1);
    });

    test('returns correct `props`', () => {
        expect.assertions(1);

        const state = {
            allComments: [singleComment]
        } as ReduxState;

        const props = mapStateToProps(state);

        expect(props).toEqual({ allComments: [singleComment] });
    });
});