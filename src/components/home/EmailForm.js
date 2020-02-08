import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', email)
  }

  return (
    <Container>
      <div>
        <h3>
          KEEP UP TO DATE WITH US
        </h3>
        <p>
          Sign up for all the latests news, deals and events at The Gallery Hotel.
        </p>
      </div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput 
            placeholder="Email Address"
            type="text"
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px;
  padding-left: 10px;
  column-gap: 20px;
  /* background-color: aliceblue; */
  margin-bottom: 10px;
  border: 1px solid black;
`;

const FormContainer = styled.div`
  letter-spacing: 0px;
  margin: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  border: 0px;
  font-size: inherit;
  color: #002b5c;
  border-bottom: 2px solid #002b5c;
  background-color: transparent;
  margin-bottom: 15px;
  margin-top: 30px;
`;