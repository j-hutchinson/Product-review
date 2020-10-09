import { shallow } from 'enzyme';
import React from 'react';
import { AllComments, mapStateToProps } from './component';
import IndividualComment from '../IndividualComment/component';
import { ReduxState } from '../../types'
import { singleComment } from '../../__fixtures__/comment'

describe('AllComments component', () => {
    test('component matches snapshot with 1 comment', () => {
        expect.assertions(2);

        const wrapper = shallow(<AllComments allComments={[singleComment]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(IndividualComment)).toHaveLength(1);
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