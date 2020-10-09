import { shallow } from 'enzyme';
import React from 'react';
import IndividualComment from './component';
import { singleComment } from '../../__fixtures__/comment'

describe('IndividualComment component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<IndividualComment comment={singleComment} />);

        expect(wrapper).toMatchSnapshot();
    });
});