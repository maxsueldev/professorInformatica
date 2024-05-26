import { useState } from 'react';

import ListMenuMobile from './ListMenuMobile';
import ListMenuDesktop from './ListMenuDesktop';
import IconsContent from './IconsContent';

import { IntroContainer, MenuContainer, VideoWrapper, VideoIntro, FadeIn, IntroContent, HamburgerMenu } from './style';

function Intro() {
    const [openMenu, setOpenMenu] = useState(false);

    function showMenu() {
        if (!openMenu) setOpenMenu(true);
        else setOpenMenu(false);
    }

    return (
        <IntroContainer>
            <MenuContainer>
                <HamburgerMenu onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </HamburgerMenu>
                <ListMenuMobile isOpen={openMenu} />
                <ListMenuDesktop />
            </MenuContainer>
            <VideoWrapper>
                <VideoIntro autoPlay loop muted>
                    <source src="https://maxsuel-informatica.vercel.app/video/videoIntro.mp4" type="video/mp4" />
                    Seu browser não suporta a Tag de vídeo
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