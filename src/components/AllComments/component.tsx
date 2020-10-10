import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { Comment, ReduxState } from '../../types';
import IndividualComment from '../IndividualComment/component';

interface Props {
    allComments: Comment[]
}

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

export const AllComments = ({ allComments }: Props): JSX.Element => (
    <StyledCommentsContainer>
        <StyledStrong>Comments:</StyledStrong>
        {allComments.length ?
            <StyledComments>
                {allComments.map((comment: Comment, ind: number): JSX.Element =>
                    <IndividualComment comment={comment} key={`${comment.name}${ind}`} />)}
            </StyledComments>
            :
            <StyledEmptyLabel>No comments available, be the first to leave a comment!</StyledEmptyLabel>
        }
    </StyledCommentsContainer>
);

export const mapStateToProps = (state: ReduxState): Props => ({
    allComments: state.allComments
})

export default connect(mapStateToProps, null)(AllComments);