import React, { ChangeEvent, FormEvent, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import { colourWheel } from '../../css/tokens';
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
    background-color: ${colourWheel.green.main};
    border-radius: 4px;
    border: 1px solid black;
    font-size: 14px; 
    padding: 8px;
`;

const StyledLabel = styled.p`
    padding-left: 10px;
    font-size: 16px;
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
            <StyledLabel>Product review for XYZ</StyledLabel>
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
                <Rating onChange={(_, rating) => setRating(Number(rating))} value={rating} />
            </StyledItem>
            <StyledItem>
                <label htmlFor="comment">Comment</label>
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