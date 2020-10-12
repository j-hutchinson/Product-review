export type Comment = {
	name: string;
	email: string;
	rating: number;
	comment: string;
	timePosted: string;
};

export interface StoreType {
	allComments: Comment[];
}

export interface ActionType {
	comment?: Comment;
	comments?: Comment[];
	type: string;
}
