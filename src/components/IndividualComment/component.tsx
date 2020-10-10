import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { Comment } from '../../types';

interface Props {
    comment: Comment;
}

const StyledComment = styled.li`
    margin: 0 ${spacing.medium};
    padding: ${spacing.medium} 0;
`;

const StyledLabel = styled.div`
    padding: 2px 0;
`;

const StyledTopLabel = styled.div`
    display: flex;
    padding: 2px 0;
`;

const StyledEnd = styled.div`
    margin-left: auto;
`;

const IndividualComment = ({ comment: { name, rating, email, comment, timePosted } }: Props): JSX.Element => (
    <StyledComment>
        <StyledTopLabel>
            <div><strong>{`Name: `}</strong>{name}</div>
            <StyledEnd><strong>{`Date: `}</strong>{timePosted}</StyledEnd>
        </StyledTopLabel>
        <StyledLabel><strong>{`Rating: `}</strong>{rating}</StyledLabel>
        <StyledLabel><strong>{`Email: `}</strong>{email}</StyledLabel>
        <StyledLabel><strong>{`Comment: `}</strong>{comment}</StyledLabel>
    </StyledComment>
);

export default IndividualComment;