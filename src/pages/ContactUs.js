import React, {useReducer, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import {Button} from '../components/utils/Buttons';
// firebase DB
import {storeRegistration} from '../dbConfig/firebase';

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
    {
      name: '',
      email: '',
      message: ''
    }  
  );

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const addRegistration = () => {
    const registration = {
      id: uuid(),
      email: userInput.email,
      name: userInput.name,
    };
    storeRegistration(registration);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(userInput.email)) {
      alert("Email can't be blank. Please try again.");
      setUserInput({
        ...userInput, email: ''
      })
      return;
    };

    if (userInput.message.length < 10) {
      alert('Your message is too short. Please try again.')
      return;
    };

    addRegistration();
    alert("Thank you for your message. We'll get back to you shortly.");
  }

  return (
    <Container>
      <Heading>
        <h1>Contact Us</h1>
        <p>
          For immidiate assistance or to reach us directly, please call us at <a style={{color: '#002b5c'}}
          href="tel: +1-631-477-4000"> 631-477-4000 </a>.<br></br>
          For all other inquiries and requests, please fill in the form below.
        </p>
      </Heading>
      <div>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder='Name'
            type='text'
            name='name'
            value={userInput.name}
            onChange={handleChange}
          />
          <Input
            placeholder='Email'
            type='email'
            name='email'
            value={userInput.email}
            onChange={handleChange}
          />
          <TextArea
            placeholder='Message'
            name='message'
            value={userInput.message}
            onChange={handleChange}
          />
          <div style={{justifySelf: 'center'}}>
            <Button type='submit'>SEND</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default ContactUs;

const Container = styled.div`
  display: grid;
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 40px;
  margin-top: 5vh;
  @media (min-width: 600px) and (max-width: 999px) {
    width: 70vw;
  }
  @media (max-width: 599px) {
    width: 90vw;
  }
`;

const Heading = styled.div`
  text-align: center;
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
  font-family: inherit;
`;

const Input = styled.input`
  border: 2px solid #93e9d9;
  height: 20px;
  margin-bottom: 20px;
  padding: .75rem .75rem;
  font-size: 0.9rem;
  color: inherit;
  font-family: inherit;
`;

const TextArea = styled.textarea`
  border: 2px solid #93e9d9;
  height: 9rem;
  min-height: 9rem;
  max-height: 12rem;
  margin-bottom: 20px;
  padding: .75rem .75rem;
  font-size: 0.9rem;
  color: inherit;
  font-family: inherit;
`;