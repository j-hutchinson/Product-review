import Rating from '@material-ui/lab/Rating';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colourWheel, spacing } from '../../css/tokens';
import { addComment } from '../../store/actions';
import { Comment } from '../../types';

export const StyledContainer = styled.form`
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 ${spacing.large} ${spacing.small} ${spacing.large};
`;

const StyledItem = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 4px;
    margin: ${spacing.small};
`;

export const StyledInput = styled.input`
   height: 24px;
   font-size: 14px;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: ${spacing.small};
`;

const StyledSubmitInput = styled.input`
    background-color: ${colourWheel.green.main};
    border-radius: 4px;
    border: 1px solid black;
    font-size: 14px; 
    padding: 8px;
`;

const StyledLabel = styled.p`
    padding-left: ${spacing.small};
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
`;

const StyledRatingSystem = styled.div`
    display: grid;
    grid-template-columns: min-content max-content;
`;

const StyledRatingLabel = styled.label`
    padding: 4px 0 0 ${spacing.small};
    font-size: 14px;
`;

const formatTime = (): string => {
    const date = new Date();
    const hours = date.getUTCHours();
    const displayedHours = hours > 12 ? `${hours - 11}` : hours; // minus 11 due to UTC
    const mins = date.getUTCMinutes();
    const suffix = hours > 12 ? 'PM' : 'AM';
    const displayedMins = mins < 10 ? `0${mins}` : mins;
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getFullYear();

    return `${displayedHours}:${displayedMins}${suffix} ${day}/${month}/${year}`;
}

interface Props {
    addSingleComment: (comment: Comment) => void;
}

export const PostComment = ({ addSingleComment }: Props): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');

    const onSubmission = (ev: FormEvent): void => {
        ev.preventDefault();
        const timePosted = formatTime();
        addSingleComment({ name, email, rating, comment, timePosted });
        setName('');
        setEmail('');
        setRating(0);
        setComment('');
    }

    return (
        <StyledContainer onSubmit={onSubmission}>
            <StyledLabel>Product review for XYZ</StyledLabel>
            <StyledItem>
                <label htmlFor="name">Name: </label>
                <StyledInput
                    id="name"
                    type="text"
                    value={name}
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void => setName(ev.target.value)}
                    required
                />
            </StyledItem>
            <StyledItem>
                <label htmlFor="email">Email: </label>
                <StyledInput
                    id="email"
                    type="email"
                    value={email}
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void => setEmail(ev.target.value)}
                    required
                />
            </StyledItem>
            <StyledItem>Rating:
                <StyledRatingSystem>
                    <Rating
                        onChange={(_, rating: number): void => setRating(Number(rating))}
                        value={rating}
                        name="Product Rating"
                    />
                    <StyledRatingLabel>({rating}) star{rating === 1 ? '' : 's'}</StyledRatingLabel>
                </StyledRatingSystem>
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

export const mapDispatchToProps = (dispatch: Function): Props => ({
    addSingleComment(comment: Comment) { dispatch(addComment(comment)) },
})

export default connect(null, mapDispatchToProps)(PostComment);