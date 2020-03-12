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
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder='Name'
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              placeholder='Email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <textarea
              placeholder='Message'
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button type='submit'>SEND</Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default ContactUs;

const Container = styled.div`

`;

const Heading = styled.div`

`;