import rootReducer from './reducers';
import { ADD_COMMENT } from '../actions/actions';
import { singleComment } from '../../__fixtures__/comment';

describe('actions', () => {
	const initialState = {
		allComments: []
	};

	test('state is updated with ADD_COMMENT action', () => {
		expect.assertions(1);

		const res = rootReducer(initialState, { type: ADD_COMMENT, comment: singleComment });

		expect(res).toStrictEqual({
			allComments: [singleComment]
		});
	});
});
