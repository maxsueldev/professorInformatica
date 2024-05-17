import styled from "styled-components";

const AboutMeContainer = styled.section`
    background-color: var(--white-color);
    color: var(--purple-color);
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const MaxsuelImage = styled.img`
    width: 6rem;
    align-self: flex-start;
    border-radius: 50%;
    border: 1px solid var(--white-color);
`;

export { AboutMeContainer, MaxsuelImage };