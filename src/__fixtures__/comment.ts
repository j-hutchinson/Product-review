import { Comment } from '../types';

export const singleComment: Comment = {
	name: 'Jack',
	email: 'something@aol.com',
	rating: 2,
	comment: 'adequate product',
	timePosted: '10:00 1/1/2020'
};

export const multipleComments: Comment[] = [
	{
		name: 'Jack',
		email: 'somewhere@aol.com',
		rating: 3,
		comment: 'adequate product',
		timePosted: '10:04AM 1/1/2020'
	},
	{
		name: 'Jonny',
		email: 'over@aol.com',
		rating: 5,
		comment: 'I love it!',
		timePosted: '6:34PM 1/1/2020'
	},
	{
		name: 'Jamie',
		email: 'the@aol.com',
		rating: 1,
		comment: 'I hate it',
		timePosted: '8:02PM 1/1/2020'
	},
	{
		name: 'Joanne',
		email: 'rainbow@aol.com',
		rating: 2,
		comment: "I don't know how to feel",
		timePosted: '10:01AM 2/1/2020'
	}
];
