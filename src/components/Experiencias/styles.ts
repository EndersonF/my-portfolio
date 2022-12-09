import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 2rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.backgroundLight};
    justify-content: center;

    @media (max-width: 1000px) {
      gap: 1rem;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;
export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 21.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s;
    border-radius: 40px;
    max-width: 20rem;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1;
    text-align: center;
  }
  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }
  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: 18rem;
      padding-top: 1.5rem;
      h1 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      padding-top: 1.5rem;
      max-width: 100%;
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
