import { ADD_COMMENT } from '../actions/actions';
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

		default:
			return state;
	}
};

export default rootReducer;
