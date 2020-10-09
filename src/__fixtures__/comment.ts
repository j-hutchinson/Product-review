import { Comment } from '../types';

export const singleComment: Comment = {
	name: 'Jack',
	email: 'something@aol.com',
	rating: 2,
	comment: 'adequate product'
};

export const multipleComments: Comment[] = [
	{
		name: 'Jack',
		email: 'somewhere@aol.com',
		rating: 3,
		comment: 'adequate product'
	},
	{
		name: 'Jonny',
		email: 'over@aol.com',
		rating: 5,
		comment: 'I love it!'
	},
	{
		name: 'Jamie',
		email: 'the@aol.com',
		rating: 1,
		comment: 'I hate it'
	},
	{
		name: 'Joanne',
		email: 'rainbow@aol.com',
		rating: 2,
		comment: "I don't know how to feel"
	}
];
