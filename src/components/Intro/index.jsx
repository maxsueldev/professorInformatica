import { useState } from 'react';

import ListMenu from './ListMenu';
import IconsContent from './IconsContent';

import { IntroContainer, VideoWrapper, VideoIntro, FadeIn, IntroContent, HamburgerMenu } from './style';

function Intro() {
    const [openMenu, setOpenMenu] = useState(false);

    function showMenu() {
        if(!openMenu) setOpenMenu(true);
        else setOpenMenu(false);
    }

    return (
        <IntroContainer>
            <HamburgerMenu onClick={showMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerMenu>
            <ListMenu isOpen={openMenu} />
            <VideoWrapper>
                <VideoIntro autoPlay loop muted>
                    <source src="https://maxsuel-informatica.vercel.app/video/videoIntro.mp4" type="video/mp4" />
                </VideoIntro>
                <FadeIn></FadeIn>
                <IntroContent>
                    <h1>Maxsuel Fernando</h1>
                    <p>Informática, Excel, Web Design e Programação JavaScript</p>
                    <IconsContent />
                </IntroContent>
            </VideoWrapper>
        </IntroContainer>
    );
}

export default Intro;