import React, { useContext } from 'react';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { StoreContext } from '../../store/StoreProvider';
import { Comment } from '../../types';
import IndividualComment from '../IndividualComment/component';


const StyledCommentsContainer = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: ${spacing.medium};
`;

const StyledStrong = styled.strong`
    padding-left: ${spacing.medium};
    font-size: 18px;
`;

const StyledComments = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
        border-bottom: 1px solid #c7c7c7;
    }
`;

export const StyledEmptyLabel = styled.p`
    padding-left: ${spacing.medium};
`;

export const AllComments = (): JSX.Element => {
    const { state: { allComments } } = useContext(StoreContext);
    return (
        <StyledCommentsContainer>
            <StyledStrong>Comments:</StyledStrong>
            {allComments.length ?
                <StyledComments>
                    {allComments.map((comment: Comment, ind: number): JSX.Element =>
                        <IndividualComment comment={comment} key={`${comment.name}${ind}`} />)
                    }
                </StyledComments>
                :
                <StyledEmptyLabel>No comments available, be the first to leave a comment!</StyledEmptyLabel>
            }
        </StyledCommentsContainer>
    )
};

export default AllComments;