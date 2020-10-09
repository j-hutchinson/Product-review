import rootReducer from './reducers';
import { ADD_COMMENT, ADD_MULTIPLE_COMMENTS, DELETE_COMMENTS } from '../actions/actions';
import { singleComment, multipleComments } from '../../__fixtures__/comment';

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

	test('state is updated with ADD_MULTIPLE_COMMENTS action', () => {
		expect.assertions(1);

		const res = rootReducer(initialState, {
			type: ADD_MULTIPLE_COMMENTS,
			comments: multipleComments
		});

		expect(res).toStrictEqual({
			allComments: multipleComments
		});
	});

	test('state is updated with DELETE_COMMENTS action', () => {
		expect.assertions(1);

		const res = rootReducer(initialState, {
			type: DELETE_COMMENTS
		});

		expect(res).toStrictEqual({
			allComments: []
		});
	});
});
