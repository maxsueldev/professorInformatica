import styled from "styled-components";

const IntroContainer = styled.div`
    height: 100vh;
`;

const VideoWrapper = styled.div`
    position: relative;
    // max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
`;

const VideoIntro = styled.video`
    position: relative;
    top: -1.25;
    left: -26.87rem;
    min-width: 100%;
    min-height: 100%;
    // width: 100%;
    overflow: hidden;
`;

const FadeIn = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 99%;
    opacity: 0.6;
    background-color: #273d50;
`;

const IntroContent = styled.div`
    width: 100%;
    height: 100%;
    color: #F5F5F5;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 35%;
    padding: 0 1.38rem;
    
    h1 {
        font-size: 4rem;
        line-height: 3.62rem;
    }

    p {
        font-size: 1.5rem;
        margin-top: 0.88rem;
    }
`;

export { IntroContainer, VideoWrapper, VideoIntro, FadeIn, IntroContent };