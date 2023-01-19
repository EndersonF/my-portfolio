import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    user-select: none;
    border-radius: 1rem;

    @media (max-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const ConhecimentoContainer = styled.div`
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;
  }

  svg {
    display: block;
    margin: auto;
    width: 4.5rem;
    height: 4.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
      transform: rotate(360deg);
      transition: 1s ease-in-out;
    }
  }
  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
  @media (max-width: 380px) {
    p {
      font-size: 0.8rem;
    }
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
