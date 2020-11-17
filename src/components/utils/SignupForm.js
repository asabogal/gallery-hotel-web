import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from './Buttons';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <FormHeading>
        <h4>
          Keep in Touch
        </h4>
        <h5>
          Sign up and our latest news, deals, and updates
        </h5>
      </FormHeading>
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
          <div>
            <Button type='submit' width='120px' height='35px'>SIGN UP</Button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default EmailForm;

const FormHeading = styled.div`
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
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