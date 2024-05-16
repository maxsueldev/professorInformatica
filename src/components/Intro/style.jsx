import styled from "styled-components";

const IntroContainer = styled.section`
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
    top: -20px;
    left: -430px;
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
    padding: 0 22px;
    
    h1 {
        font-size: 64px;
        line-height: 58px;
    }

    p {
        font-size: 24px;
        margin-top: 14px;
    }
`;

export { IntroContainer, VideoWrapper, VideoIntro, FadeIn, IntroContent };