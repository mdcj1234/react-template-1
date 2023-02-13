import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const LayoutContainer = styled.div`
  animation: ${appearFromLeft} 1s;
  height: calc(100vh - 10rem);
`;
