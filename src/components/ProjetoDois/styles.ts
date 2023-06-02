import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  div.overlay {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      225deg,
      rgb(49, 56, 96) 0%,
      rgb(17, 23, 43) 100%
    );
    opacity: 0.7;
  }
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 13rem;
    padding: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: transform 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      transform: scale(1.05);
      border-color: ${({ theme }) => theme.primary};
    }
    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.secondary};
        font-weight: 400;
        font-size: 1.2rem;
      }
    }
  }
`;
