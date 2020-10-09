import React from 'react';
import styled from 'styled-components';
import { Comment } from '../../types';

interface Props {
    comment: Comment
}

const StyledComment = styled.div`
    padding: 20px;
`;

const StyledLabel = styled.div``;

const IndividualComment = ({ comment: { name, rating, email, comment } }: Props) => (
    <StyledComment>
        <StyledLabel><strong>Name:</strong> {name}</StyledLabel>
        <StyledLabel>
            <strong>Rating:</strong> {rating}</StyledLabel>
        <StyledLabel>
            <strong>Email:</strong> {email}</StyledLabel>
        <StyledLabel>
            <strong>Comment:</strong> {comment}</StyledLabel>
    </StyledComment>
);

export default IndividualComment;