import styled from "styled-components";

const ContactMeContainer = styled.section`
    background-color: var(--purple-color);
    color: var(--white-color);
    text-align: center;

    p {
        margin: 0.4rem 0 1.6rem 0;
    }

    @media (768px <= width) {
        p {
            margin: 1.2rem 0 2rem 0;
        }
    }
`;

const FormContact = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0 auto;

    @media (768px <= width) {
        width: 75%;
    }

    @media (1025px <= width) {
        width: 55%;
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    padding: 0.6rem 0.8rem;
`;

const TextArea = styled.textarea`
    outline: none;
    border: none;
    padding: 0.6rem 0.8rem;
`;

const Button = styled.button`
    background-color: var(--white-color);
    border: none;
    font-size: 0.9rem;
    padding: 0.2rem 0;
`;

export { ContactMeContainer, FormContact, Input, TextArea, Button };