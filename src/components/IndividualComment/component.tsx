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

const IndividualComment = ({ comment }: Props) => {
    return (
        <StyledComment>
            <StyledLabel>Name: {comment.name}</StyledLabel>
            <StyledLabel>Rating: {comment.rating}</StyledLabel>
            <StyledLabel>Email: {comment.email}</StyledLabel>
            <StyledLabel>Comment: {comment.comment}</StyledLabel>
        </StyledComment>
    )
}

export default IndividualComment;