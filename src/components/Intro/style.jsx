import styled from "styled-components";

const IntroContainer = styled.div`
    position: relative;

    @media (768px <= width) {
        heigth: 100vh;
    }
`;

const MenuContainer = styled.div``;

const HamburgerMenu = styled.div`
    width: 4rem;
    position: absolute;
    top: 4%;
    left: calc(50% - 2rem);
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 1rem;
    z-index: 2;

    span {
        display: block;
        width: 1.7rem;
        height: 3px;
        background-color: var(--white-color);
    }

    @media (768px <= width) {
        display: none;
    }
`;  

const VideoWrapper = styled.div`
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    `;
    
const VideoIntro = styled.video`
    position: relative;
    top: -1.25;
    left: -26.87rem;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;

    @media (768px <= width) {
        width: 100%;
        left: 0;
    }
`;

const FadeIn = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: var(--fade-in-color);
`;

const IntroContent = styled.div`
    width: 100%;
    height: 100%;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 32%;
    padding: 0 1.38rem;

    p {
        font-size: 1.3rem;
        font-style: italic;
        line-height: 1.8rem;
        margin-top: 0.6rem;
        margin-bottom: 0.8rem;
    }

    @media (481px <= width) {
        top: 38%;
    }

    @media (768px <= width) {
        top: 42%;    
    }

    @media (1025px <= width) {
        p {
            font-size: 1.3rem;
            margin-top: 0.9rem;
        }
    }

    @media (1281px <= width) {
        p {
            font-size: 1.8rem;
            margin-top: 1.8rem;
            margin-bottom: 1.2rem;
        }
    }
`;

export { IntroContainer, MenuContainer, HamburgerMenu, VideoWrapper, VideoIntro, FadeIn, IntroContent };