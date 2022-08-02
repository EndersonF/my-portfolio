import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    border-radius: 10%;
    overflow: hidden;
    width: 300px;
    flex: 1;
    filter: drop-shadow(10px 10px 10px #000);
  }

  > div {
    flex: 4;
  }
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }
  @media (max-width: 1000px) {
    > img {
      width: 23rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 1rem;
  width: 100%;
  h1 {
    border-right: 2px solid ${({ theme }) => theme.background};
    font-size: 6rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }

    > div {
      flex: 1;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }

  .animacao-caixa h1,
  h2 {
    overflow: hidden;
    white-space: nowrap;
    animation: blinkCursor 500ms steps(40) infinite normal,
      typing 5s steps(40) 2s normal both;
    animation-fill-mode: none;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 41.8rem;
    }
  }

  @media (max-width: 1400px) {
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 21rem;
      }
    }
  }

  @media (max-width: 1300px) {
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 21rem;
      }
    }
  }

  @media (max-width: 1000px) {
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 16rem;
      }
    }
  }

  @media (max-width: 700px) {
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 15.9rem;
      }
    }
  }
  @keyframes blinkCursor {
    from {
      width: 0;
      border-right-color: ${({ theme }) => theme.primary};
    }
    to {
      border-right-color: transparent;
    }
  }
  @media (max-width: 700px) {
    from {
      width: 0;
    }
    to {
      width: 25rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.background3};
  padding: 2rem;
  font-family: 'Exo', monospace;
  font-weight: 500;
  color: #fff;
  width: 26rem;
  align-self: flex-start;
  transition: 4s !important;
  border-radius: 20px;

  @media (max-width: 1450px) {
    width: 22rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 22rem;
    padding: 1rem;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    align-self: center;
  }
  @media (max-width: 500px) {
    width: 100%;
    align-self: center;
  }
  @media (max-width: 400px) {
    width: 100%;
    align-self: center;
    font-size: 0.6rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 0.5rem;
  }

  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
`;
