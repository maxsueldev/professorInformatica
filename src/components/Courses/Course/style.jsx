import styled from "styled-components";

const CourseIcon = styled.img`
    width: 3.5rem;
    float: left;
    margin-right: 0.8rem;
`;

const CourseContent = styled.div``;

const Title = styled.h4`
    font-style: italic;
    margin-bottom: 0.4rem;
`;

const Description = styled.p`
    margin-bottom: 1.2rem;
`;

const ButtonGrade = styled.a`
    width: 8rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    background-color: var(--white-color);
    color: var(--purple-color);
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.3rem 0;
`;

export { CourseIcon, CourseContent, Title, Description, ButtonGrade };