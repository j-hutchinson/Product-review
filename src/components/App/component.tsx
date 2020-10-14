import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { mockData } from '../../data/mockData';
import { addMultipleComments, deleteComments } from '../../store/actions';
import AllComments from '../AllComments/component';
import PostComment from '../PostComment/component';
import Trends from '../Trends/component';

interface Props {
  addComments: () => void;
  deleteComments: () => void;
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-gap: ${spacing.large};
  font-size: 14px;
  margin: 0;
  padding: ${spacing.medium};

  @media (min-width: 800px) {
    margin: ${spacing.medium} ${spacing.large};
    padding: ${spacing.xlarge};
  }
`;

const StyledSection = styled.div` 
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const StyledButton = styled.button`
  margin-right: ${spacing.small};
  padding: ${spacing.small};
`;

const StyledButtonWrapper = styled.div``;

/* 
* Helper buttons for testing purposes
* Adds/Removes mock comments to store to test functionality
*/

export const App = ({ addComments, deleteComments }: Props): JSX.Element => (
  <StyledWrapper>
    <StyledSection>
      <PostComment />
      <Trends />
    </StyledSection>
    <AllComments />
    <StyledButtonWrapper>
      <StyledButton className="multiple-button" onClick={() => addComments()}>Use mock data</StyledButton>
      <StyledButton className="clear-button" onClick={() => deleteComments()}>Clear</StyledButton>
    </StyledButtonWrapper>
  </StyledWrapper >
);


export const mapDispatchToProps = (dispatch: Function): Props => ({
  addComments() {
    dispatch(addMultipleComments(mockData))
  },
  deleteComments() {
    dispatch(deleteComments())
  },
})

export default connect(null, mapDispatchToProps)(App);
