import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    margin-top: 4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);

    @media (max-width: 1000px) {
      gap: 2.5rem;
      flex-wrap: wrap;
    }
    @media (max-width: 700px) {
      flex-wrap: wrap;
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(3, 5fr);
      justify-content: center;
      align-items: center;
      margin-left: 3rem;
    }
  }
`;

export const ConhecimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  p {
    display: grid;
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
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
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      margin: auto;
    }
  }
`;
