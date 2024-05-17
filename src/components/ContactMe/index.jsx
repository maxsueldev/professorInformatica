import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { ContactMeContainer, FormContact, Input, TextArea, Button } from './style';

function ContactMe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendMail(event) {
        event.preventDefault();
        
        const templateParams = {
            email: email,
            message: message
        }

        emailjs.send("service_dhftnhf", "template_vu8a5nr", templateParams, "b-M1bCZqP2Z9N8Qdx")
        .then(response => {
            console.log('EMAIL ENVIADO', response.status, response.text);
            alert('EMAIL ENVIADO');
            setEmail('');
            setMessage('');
        }, error => {
            console.log('ERRO: ', error);
        })
    }

    return (
        <ContactMeContainer id="contactMe" onSubmit={sendMail}>
            <h2>Contato</h2>
            <p>Tem interesse em aprender ...</p>
            <FormContact>
                <Input type="email" placeholder='Informe seu email:' onChange={e => setEmail(e.target.value)} value={email} required />
                <TextArea rows={4} placeholder='Mensagem:' onChange={e => setMessage(e.target.value)} value={message} required ></TextArea>
                <Button type="submit">Enviar</Button>
            </FormContact>
        </ContactMeContainer>
    );
}

export default ContactMe;