import { ADD_COMMENT, ADD_MULTIPLE_COMMENTS, DELETE_COMMENTS } from './actions';
import { ActionType, StoreType } from '../types';

export const initialState: StoreType = {
	allComments: []
};

const reducer = (state = initialState, action: ActionType): StoreType => {
	switch (action.type) {
		case ADD_COMMENT:
			return {
				allComments: [...state.allComments, action.comment]
			};
		case ADD_MULTIPLE_COMMENTS:
			return {
				allComments: [...state.allComments, ...action.comments]
			};
		case DELETE_COMMENTS:
			return {
				allComments: []
			};

		default:
			return state;
	}
};

export default reducer;
