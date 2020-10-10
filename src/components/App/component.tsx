import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../css/tokens';
import { mockData } from '../../data/mockData';
import { addMultipleComments, deleteComments } from '../../store/actions';
import store from '../../store/store';
import AllComments from '../AllComments/component';
import PostComment from '../PostComment/component';
import Trends from '../Trends/component';

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

const App = (): JSX.Element => (
  <StyledWrapper>
    <StyledSection>
      <PostComment />
      <Trends />
    </StyledSection>
    <AllComments />
    <StyledButtonWrapper>
      <StyledButton className="multiple-button" onClick={() => store.dispatch(addMultipleComments(mockData))}>Use mock data</StyledButton>
      <StyledButton className="clear-button" onClick={() => store.dispatch(deleteComments())}>Clear</StyledButton>
    </StyledButtonWrapper>
  </StyledWrapper >
);


export default App;
