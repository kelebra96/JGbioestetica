import React from 'react';
import styled from 'styled-components';
import { containerStyles } from '../../styles/media';

const StyledContainer = styled.div`
  ${containerStyles}
`;

const Container = ({ children, className, ...props }) => {
  return (
    <StyledContainer className={className} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;