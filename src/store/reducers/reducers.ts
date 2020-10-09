import { ADD_COMMENT, ADD_MULTIPLE_COMMENTS } from '../actions/actions';
import { ActionType, ReduxState } from '../../types';

const initialState: ReduxState = {
	allComments: []
};

const rootReducer = (state = initialState, action: ActionType): ReduxState => {
	switch (action.type) {
		case ADD_COMMENT:
			return {
				...state,
				allComments: [...state.allComments, action.comment]
			};
		case ADD_MULTIPLE_COMMENTS:
			return {
				...state,
				allComments: [...state.allComments, ...action.comments]
			};

		default:
			return state;
	}
};

export default rootReducer;
