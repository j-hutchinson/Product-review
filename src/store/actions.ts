import { ActionType, Comment } from '../types';

const ADD_COMMENT = 'ADD_COMMENT';
const ADD_MULTIPLE_COMMENTS = 'ADD_MULTIPLE_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

const addComment = (comment: Comment): ActionType => {
	return { type: ADD_COMMENT, comment };
};

const addMultipleComments = (comments: Comment[]): ActionType => {
	return { type: ADD_MULTIPLE_COMMENTS, comments };
};

const deleteComments = (): ActionType => {
	return { type: DELETE_COMMENTS };
};

export {
	ADD_COMMENT,
	ADD_MULTIPLE_COMMENTS,
	DELETE_COMMENTS,
	addComment,
	addMultipleComments,
	deleteComments
};
