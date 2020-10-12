import { render } from '@testing-library/react';
import React from 'react';
import { singleComment } from '../../__fixtures__/comment';
import IndividualComment from './component';

describe('IndividualComment component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = render(<IndividualComment comment={singleComment} />);

        expect(wrapper).toMatchSnapshot();
    });
});