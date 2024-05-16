import { IntroContainer, VideoWrapper, VideoIntro, FadeIn, IntroContent } from './style';

function Intro() {
    return (
        <IntroContainer>
            <VideoWrapper>
            <FadeIn></FadeIn>
                <VideoIntro autoPlay loop muted>
                    <source src="https://maxsuel-informatica.vercel.app/video/videoIntro.mp4" type="video/mp4" />
                </VideoIntro>
                <IntroContent>
                <h1>Maxsuel Fernando</h1>
                <p>Informática, Excel, Web Design e Programação JavaScript</p>
            </IntroContent>
            </VideoWrapper>
        </IntroContainer>
    );
}

export default Intro;