import React from 'react';
import styled from 'styled-components';
import AllComments from '../AllComments/component';
import PostComment from '../PostComment/component';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
  font-size: 14px;
  margin: auto;
  padding: 60px;
`;


const StyledSection = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const App = (): JSX.Element => (
  <StyledWrapper>
    <StyledSection>
      <PostComment />
      <div>hello</div>
    </StyledSection>
    <AllComments />
  </StyledWrapper>
);

export default App;
