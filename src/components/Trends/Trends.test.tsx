import { shallow } from 'enzyme';
import React from 'react';
import Trends from './component';

describe('Trends component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Trends />);

        expect(wrapper).toMatchSnapshot();
    });
});