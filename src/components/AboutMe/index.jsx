import maxsuelImage from '../../img/aboutMe/me.jpg';

import { AboutMeContainer, MaxsuelImage } from './style';

function AboutMe() {
    
    return (
        <AboutMeContainer>
            <MaxsuelImage src={maxsuelImage} alt="Maxsuel Fernando" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi maxime incidunt, quas dolor iure, quasi non amet hic recusandae modi totam a. Distinctio nesciunt voluptatum accusamus repellat ratione hic fugit.</p>
        </AboutMeContainer>
    );
}

export default AboutMe;