import styled from "styled-components";

const CoursesContainer = styled.section`
    background-color: var(--purple-color);
    color: var(--white-color);

    h2 {
        margin-bottom: 1.6rem;
    }
`;

const FlexCourses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export { CoursesContainer, FlexCourses };