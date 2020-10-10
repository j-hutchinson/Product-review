import { addComment, addMultipleComments, deleteComments } from './actions';
import { multipleComments, singleComment } from '../__fixtures__/comment';

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

	test('deleteComments', () => {
		expect.assertions(1);

		const res = deleteComments();

		expect(res).toStrictEqual({
			type: 'DELETE_COMMENTS'
		});
	});
});
