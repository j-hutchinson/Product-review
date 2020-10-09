import { shallow } from 'enzyme';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Trends, StyledEmptyLabel, mapStateToProps } from './component';
import { multipleComments } from '../../__fixtures__/comment';
import { ReduxState } from '../../types';


describe('Trends component', () => {
    test('component matches snapshot with ratings', () => {
        expect.assertions(2);

        const wrapper = shallow(<Trends ratings={[4, 5, 4, 3, 1, 2]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Doughnut)).toHaveLength(1);
    });

    test('component matches snapshot with no ratings', () => {
        expect.assertions(3);

        const wrapper = shallow(<Trends ratings={[]} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Doughnut)).toHaveLength(0);
        expect(wrapper.find(StyledEmptyLabel)).toHaveLength(1);
    });


    test('returns correct `props`', () => {
        expect.assertions(1);

        const state = {
            allComments: multipleComments
        } as ReduxState;

        const props = mapStateToProps(state);

        expect(props).toEqual({ ratings: [3, 5, 1, 2] });
    });
});