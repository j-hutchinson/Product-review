import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Comment, ReduxState } from '../../types';
import IndividualComment from '../IndividualComment/component';

interface Props {
    allComments: Comment[]
}

const StyledCommentsContainer = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: 20px;
`;

export const AllComments = ({ allComments }: Props): JSX.Element => (
    <StyledCommentsContainer>
        <strong>Comments:</strong>
        {allComments.map((comment: Comment, ind: number): JSX.Element =>
            <IndividualComment comment={comment} key={`${comment.name}${ind}`} />)
        }
    </StyledCommentsContainer>
);

export const mapStateToProps = (state: ReduxState): Props => ({
    allComments: state.allComments
})

export default connect(mapStateToProps, null)(AllComments);