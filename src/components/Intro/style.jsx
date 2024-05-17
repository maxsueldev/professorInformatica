import styled from "styled-components";

const IntroContainer = styled.div`
    height: 100vh;
`;

const HamburgerMenu = styled.div`
    position: absolute;
    top: 4%;
    left: 48%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    padding: 1rem;
    z-index: 2;

    span {
        display: block;
        width: 1.4rem;
        height: 2px;
        background-color: var(--white-color);
    }
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
    background-color: var(--fade-in-color);
`;

const IntroContent = styled.div`
    width: 100%;
    height: 100%;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 34%;
    padding: 0 1.38rem;

    p {
        font-size: 1.3rem;
        font-style: italic;
        line-height: 1.6rem;
        margin-top: 0.6rem;
        margin-bottom: 0.6rem;
    }
`;

export { IntroContainer, HamburgerMenu, VideoWrapper, VideoIntro, FadeIn, IntroContent };