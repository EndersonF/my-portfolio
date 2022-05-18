import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 5rem;
}
h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 4rem;
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
        h1 {
        font-size: 1.5rem;
        }
        h2 {
        font-size: 1rem;
        }
    }
`;
