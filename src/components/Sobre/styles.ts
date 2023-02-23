import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 5rem;
  }

  h2 {
    color: ${({ theme }) => theme.backgroundWhite};
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 0.5px;
    font-size: 1.4rem;
    font-family: 'Exo', Roboto, sans-serif;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
