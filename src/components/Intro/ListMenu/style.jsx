import styled from "styled-components";

const ListMenuUl = styled.ul`
    font-size: 1.2rem;
    position: absolute;
    top: 14%;
    left: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    z-index: 2;

    @media (481px <= width) {
        left: 41%;    
    }

    @media (768px <= width) {
        top: 6%;
        left: 44%;
        gap: 0.4rem;    
    }

    @media (768px <= width) and (orientation: landscape) {
        top: 8.5%;    
    }

    @media (1025px <= width) {
        left: 43%;
        font-size: 1.4rem;
    }
`;

export { ListMenuUl };