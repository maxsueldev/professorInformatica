import { CourseContainer, CourseIcon, CourseContent, Title, Description, ButtonGrade } from './style';

function Course({ name, courseIcon, description, hrefGrade }) {
    return (
        <CourseContainer>
            <CourseIcon src={courseIcon} alt={name + ' icon'} />
            <CourseContent>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </CourseContent>
            <ButtonGrade href={hrefGrade} download>Ver grade</ButtonGrade>
        </CourseContainer>
    );
}

export default Course;