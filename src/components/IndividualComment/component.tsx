import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { Comment } from '../../types';

interface Props {
    comment: Comment
}

const StyledComment = styled.div`
    padding: ${spacing.medium};
`;

const IndividualComment = ({ comment: { name, rating, email, comment } }: Props): JSX.Element => (
    <StyledComment>
        <div><strong>Name: </strong>{name}</div>
        <div><strong>Rating: </strong>{rating}</div>
        <div><strong>Email: </strong>{email}</div>
        <div><strong>Comment: </strong>{comment}</div>
    </StyledComment>
);

export default IndividualComment;