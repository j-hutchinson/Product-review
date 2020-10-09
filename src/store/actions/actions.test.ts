import { addComment } from './actions';
import { singleComment } from '../../__fixtures__/comment';

describe('actions', () => {
	test('addComment', () => {
		expect.assertions(1);

		const res = addComment(singleComment);

		expect(res).toStrictEqual({
			type: 'ADD_COMMENT',
			comment: singleComment
		});
	});
});
