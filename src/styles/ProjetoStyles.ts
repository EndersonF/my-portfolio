import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.backgroundWhite};
      font-size: 1.5rem;
      font-weight: 400;
      text-align: justify;
      line-height: 1.55;
    }

    button {
      background: #026456;
      padding: 0.8rem 3rem;
      border-radius: 5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }

      a {
        color: #f8f8f2;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;
      p {
        font-size: 0.875rem;
        letter-spacing: -0.01rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
