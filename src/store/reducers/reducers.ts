import { ADD_COMMENT, ADD_MULTIPLE_COMMENTS, DELETE_COMMENTS } from '../actions/actions';
import { ActionType, ReduxState } from '../../types';

const initialState: ReduxState = {
	allComments: []
};

const rootReducer = (state = initialState, action: ActionType): ReduxState => {
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

export default rootReducer;
