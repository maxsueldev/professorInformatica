import styled from "styled-components";

const ListMenu = styled.ul`
    display: none;
    font-size: 1.2rem;
    width: 20rem;
    position: absolute;
    top: 5%;
    left: calc(50% - 10rem);
    z-index: 2;

    li a:hover {
        color: var(--red-color);
        transition: all .6s ease-out;
    }

    @media (768px <= width) {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }
`;

export { ListMenu };