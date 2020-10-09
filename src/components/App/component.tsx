import React from 'react';
import styled from 'styled-components';
import store from '../../store/store';
import { addMultipleComments } from '../../store/actions/actions';
import AllComments from '../AllComments/component';
import PostComment from '../PostComment/component';
import Trends from '../Trends/component';
import { mockData } from '../../data/mockData';
import { spacing } from '../../css/tokens';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 340px 1fr;
  grid-gap: 40px;
  font-size: 14px;
  margin: ${spacing.medium} ${spacing.large};
  padding: ${spacing.xlarge};
`;

const StyledSection = styled.div` 
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: ${spacing.medium};
  }
`;

const Button = styled.button`
  width: 100px;
`;

const App = (): JSX.Element => {
  const addMockData = () => store.dispatch(addMultipleComments(mockData));

  return (
    <StyledWrapper>
      <StyledSection>
        <PostComment />
        <Trends />
      </StyledSection>
      <AllComments />
      <Button onClick={addMockData} >Use mock data</Button>
    </StyledWrapper>
  );
}

export default App;
