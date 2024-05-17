import mailIcon from '../../img/footer/mail.svg';
import linkedinIcon from '../../img/footer/linkedin.svg';
import instagramIcon from '../../img/footer/instagram.svg';
import whatsappIcon from '../../img/footer/whatsapp.svg';

import { FooterContainer } from './style';

function Footer() {
    return (
        <FooterContainer>
            <a href="mailto:maxsuel.dev@gmail.com" target='_blank'><img src={mailIcon} alt="mail icon" /></a>
            <a href="https://www.linkedin.com/in/maxsuelfernandob/" target='_blank'><img src={linkedinIcon} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/maxsuelfernandob/" target='_blank'><img src={instagramIcon} alt="instagram icon" /></a>
            <a href="https://web.whatsapp.com/send?phone=5582999808600" target='_blank'><img src={whatsappIcon} alt="whatsapp icon" /></a>
        </FooterContainer>
    );
}

export default Footer;