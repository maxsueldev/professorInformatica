import styled from "styled-components";

const ListMenuUl = styled.ul`
    font-size: 1.2rem;
    width: 6rem;
    position: absolute;
    top: 14%;
    left: calc(50% - 3rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    z-index: 2;

    // @media (481px <= width) {
    //     left: 41%;    
    // }
`;

export { ListMenuUl };