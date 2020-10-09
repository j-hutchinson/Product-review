import React, { ChangeEvent, FormEvent, useState } from 'react'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import styled from 'styled-components'
import { addComment } from '../../store/actions/actions';
import store from '../../store/store';

export const StyledContainer = styled.form``;

const StyledItem = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 4px;
    margin: 10px;
`;

export const StyledInput = styled.input`
   height: 24px;
   font-size: 14px;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
`;

const StyledSubmitInput = styled.input`
    background-color: #03fc28;
    border-radius: 4px;
    border: 1px solid black;
    font-size: 14px; 
    padding: 8px;
`;

const StyledRatingLabel = styled.p`
    padding-left: 20px;
    display: inline-block;
`;

const PostComment = (): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');

    const onSubmission = (ev: FormEvent): void => {
        ev.preventDefault();
        store.dispatch(addComment({ name, email, rating, comment }));
        setName('');
        setEmail('');
        setRating(0);
        setComment('');
    }

    return (
        <StyledContainer onSubmit={onSubmission}>
            <StyledItem>
                <label htmlFor="name"> Name: </label>
                <StyledInput
                    id="name"
                    type="text"
                    value={name}
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void => setName(ev.target.value)}
                    required
                />
            </StyledItem>
            <StyledItem>
                <label htmlFor="email"> Email: </label>
                <StyledInput
                    id="email"
                    type="email"
                    value={email}
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void => setEmail(ev.target.value)}
                    required
                />
            </StyledItem>
            <StyledItem>Rating:
                <div>
                    <Rater
                        rating={rating}
                        total={5}
                        onRate={({ rating }): void => setRating(rating)}
                    />
                    <StyledRatingLabel>({rating}) stars</StyledRatingLabel>
                </div>
            </StyledItem>
            <StyledItem>
                <label htmlFor="comment"> Comment </label>
                <StyledInput
                    id="comment"
                    type="text"
                    value={comment}
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void => setComment(ev.target.value)}
                    required
                />
            </StyledItem>
            <StyledButtonWrapper>
                <StyledSubmitInput type="submit" value="Submit" />
            </StyledButtonWrapper>
        </StyledContainer>
    );
}
export default PostComment