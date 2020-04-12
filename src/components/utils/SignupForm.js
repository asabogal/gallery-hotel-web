import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from './Buttons';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', email)
  }

  return (
    <Container>
      <div>
        <h4>
          Keep in Touch
        </h4>
        <h5>
          Sign up for all the latests news, deals and updates
        </h5>
      </div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput 
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput 
            placeholder="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type='submit' width='120px' height='35px'>SIGN UP</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default EmailForm;

const Container = styled.div`
  display: grid;
  width: 200px;
`;

const FormContainer = styled.div`
  letter-spacing: 0px;
  button {
    margin-top: 5px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 20px;
  border: 1px solid #002b5c;
  font-size: 14px;
  color: #002b5c;
  background-color: #f6f7ff;
  margin-bottom: 5px;
  padding: 5px;
`;