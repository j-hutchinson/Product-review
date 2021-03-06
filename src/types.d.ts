export type Comment = {
	name: string;
	email: string;
	rating: number;
	comment: string;
	timePosted: string;
};

export interface ReduxState {
	allComments: Comment[];
}

export interface ActionType {
	comment?: Comment;
	comments?: Comment[];
	type: string;
}
