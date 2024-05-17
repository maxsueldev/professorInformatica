import { CourseIcon, CourseContent, Title, Description, ButtonGrade } from './style';

function Course({ name, courseIcon, description, hrefGrade }) {
    return (
        <div>
            <CourseIcon src={courseIcon} alt={name + ' icon'} />
            <CourseContent>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </CourseContent>
            <ButtonGrade href={hrefGrade} download>Ver grade</ButtonGrade>
        </div>
    );
}

export default Course;