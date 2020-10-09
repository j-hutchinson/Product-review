import { ActionType, Comment } from '../../types';

const ADD_COMMENT = 'ADD_COMMENT';

const addComment = (comment: Comment): ActionType => {
	return { type: ADD_COMMENT, comment };
};

export { ADD_COMMENT, addComment };
