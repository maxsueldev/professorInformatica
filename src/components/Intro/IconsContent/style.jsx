import styled from "styled-components";

const IconsContainer = styled.div`
    display: flex;
    gap: 0.6rem;

    img {
        width: 2rem;
    }

    @media (481px <= width) {
        margin-top: 0.5rem;
    }

    @media (768px <= width) {
        img {
            width: 2.3rem;
        }
    }

    @media (1025px <= width) {
        margin-top: 0.8rem;
        gap: 0.8rem;

        img {
            width: 2.2rem;
        }
    }

    @media (1280px <= width) {
        img {
            width: 3.4rem;
        }
    }
`;

export { IconsContainer };