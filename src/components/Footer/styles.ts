import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
  }

  .buttonScroll {
    border: none;
    background: none;
    color: ${({ theme }) => theme.secondary};
    transition: 0.5s;
    cursor: pointer;
    font-size: 1.6rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 550px) {
      button {
        font-size: 0.9rem;
        margin-right: 0.5rem;
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.7rem;
        margin-right: 0.5rem;
      }
      > section {
        gap: 0.6rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
        span {
          font-size: 0.7rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
