import { addComment, addMultipleComments } from './actions';
import { multipleComments, singleComment } from '../../__fixtures__/comment';

describe('actions', () => {
	test('addComment', () => {
		expect.assertions(1);

		const res = addComment(singleComment);

		expect(res).toStrictEqual({
			type: 'ADD_COMMENT',
			comment: singleComment
		});
	});

	test('addMultipleComments', () => {
		expect.assertions(1);

		const res = addMultipleComments(multipleComments);

		expect(res).toStrictEqual({
			type: 'ADD_MULTIPLE_COMMENTS',
			comments: multipleComments
		});
	});
});
