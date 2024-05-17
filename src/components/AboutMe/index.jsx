import maxsuelImage from '../../img/aboutMe/me.jpg';

import { AboutMeContainer, MaxsuelImage, About } from './style';

function AboutMe() {
    
    return (
        <AboutMeContainer>
            <MaxsuelImage src={maxsuelImage} alt="Maxsuel Fernando" />
            <About>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi maxime incidunt, quas dolor iure, quasi non amet hic recusandae modi totam a. Distinctio nesciunt voluptatum accusamus repellat ratione hic fugit.</About>
        </AboutMeContainer>
    );
}

export default AboutMe;