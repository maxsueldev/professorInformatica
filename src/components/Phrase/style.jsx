import styled from "styled-components";

const PhraseContainer = styled.section`
    background-color: var(--white-color);
    color: var(--purple-color);
    text-align: center;

    p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 0.8rem;
    }

    @media (768px <= width) {
        p {
            font-size: 1.6rem;
        }
    }

    @media (1025px <= width) {
        p {
            font-size: 1.8rem;
        }
    }
`;

export { PhraseContainer };