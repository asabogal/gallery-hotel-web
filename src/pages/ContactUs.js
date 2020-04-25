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
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container>
        <Heading>
          <h1>CONTACT US</h1>
          <p>
            For immidiate assistance or to reach us directly, please call us at <a style={{color: '#002b5c'}}
            href="tel: +1-631-477-4000"> 631-477-4000 </a>.<br></br>
            For all other inquiries and requests, please fill in the form below.
          </p>
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