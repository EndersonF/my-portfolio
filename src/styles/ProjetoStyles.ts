import { darken } from "polished";
import styled from "styled-components"

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
            color: ${({ theme }) => theme.textHighlight};
            font-size: 1.8rem;
            font-weight: 400;
            text-align: justify;
            line-height: 1.5;
        }

        button {
            background: ${({ theme }) => theme.primary};
            padding: 0.8rem 3rem;
            border-radius: 5rem;
            border: none;
            transition: .5s;
            margin-top: 2rem;

            &:hover {
                background: ${({ theme }) => darken(0.05, theme.primary)};
            }

            a {
                color: #fff;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 400;
            }
        }

        @media (max-width: 700px) {
            padding: 0 2.5rem;
             p {
                 font-size: 1rem;
             }

             button {
                 padding: .7rem 2rem;
                 
                 a {
                     font-size: .9rem;
                 }
             }
            }
        }
`;