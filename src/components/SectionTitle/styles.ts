import styled from 'styled-components';

export const Container = styled.div`
  .barra::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 40px;
    background: ${({ theme }) => theme.backgroundWhite};
    margin-right: 1rem;
  }

  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 4rem;
  }
  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 500px) {
    .barra::before {
      width: 4px;
      height: 20px;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
