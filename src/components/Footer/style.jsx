import styled from "styled-components";

const FooterContainer = styled.section`
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    padding: 0.6rem 0;

    img {
        width: 2.2rem;
    }

    @media (768px <= width) {
        padding: 1rem 0;

        img {
            width: 2.4rem;
        }
    }

    @media (1025px <= width) {
        img {
            width: 2rem;
        }
    }

    @media (1281px <= width) {
        img {
            width: 3rem;
        }
    }
`;

export { FooterContainer };