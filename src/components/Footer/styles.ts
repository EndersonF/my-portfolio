import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    margin-top: 10rem;
    border-top: 1px solid ${({theme}) => theme.backgroundLight};
    height: 5rem;
    align-items: center;
    justify-content: center;

     span{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 1.5rem;
            color: #fff;
            font-weight: bold;
        }
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;


        button {
            border: none;
            background: none;
            color: ${({theme}) => theme.secondary};
            text-transform: uppercase;
            font-weight: 300;
            font-size: 1.2rem;
        }
        > section {
            display: flex;
            align-items: center;
            gap: 1rem;

            svg {
                width: 2rem;
                height: 2rem;
                color: ${({theme}) => theme.text};
                transition: 0.5s;
                cursor: pointer;

                &:hover {
                    color: ${({theme}) => theme.primary};
            }
        }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }
      > section {
        gap: 0.8rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;


