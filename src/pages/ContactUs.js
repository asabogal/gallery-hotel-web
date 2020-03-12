import React, { Component } from 'react'
import styled from 'styled-components';
import {Button} from '../components/utils/Buttons';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: ''
     };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('message sent');
  }

  handleChange = (e) => {
    const {name, value} = e.taget;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container>
        <Heading>
          <h1>CONTACT US</h1>
        </Heading>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder='Name'
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              placeholder='Email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextArea
              placeholder='Message'
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            />
            <div style={{justifySelf: 'center'}}>
             <Button type='submit'>SEND</Button>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}

export default ContactUs;

const Container = styled.div`
  display: grid;
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 20px;
  margin-top: 10vh;
  @media (max-width: 1000px) {
  .contact-container {
    width:  80vw;
    }
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
`;

const Input = styled.input`
  border: 1px #002b5c solid;
  height: 20px;
  margin-bottom: 20px;
  padding: .75rem .75rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  border: 1px #002b5c solid;
  height: 9rem;
  min-height: 9rem;
  max-height: 12rem;
  margin-bottom: 20px;
  padding: .75rem .75rem;
  font-size: 1rem;
`;