import styled from "styled-components";

const CoursesContainer = styled.section`
    clear: both;
    background-color: var(--purple-color);
    color: var(--white-color);

    h2 {
        margin-bottom: 2rem;
    }

    @media (1025px <= width) {
        padding: 3.6rem 10rem;

        h2 {
            margin-bottom: 4rem;
        }
    }
`;

const FlexCourses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (768px <= width) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export { CoursesContainer, FlexCourses };