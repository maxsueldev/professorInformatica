import styled from "styled-components";

const AboutMeContainer = styled.section`
    background-color: var(--white-color);
    color: var(--purple-color);
    margin: 0 auto;

    @media (481px <= width) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
    }

    @media (1025px <= width) {
        width: 85%;
    }
`;

const MaxsuelImage = styled.img`
    width: 7rem;
    align-self: flex-start;
    border-radius: 50%;
    border: 1px solid var(--white-color);
    float: left;
    margin-right: 0.6rem;

    @media (481px <= width) {
        margin-right: 1rem;
    }
`;

const About = styled.p``;

export { AboutMeContainer, MaxsuelImage, About };