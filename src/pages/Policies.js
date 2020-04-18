import React from 'react';
import styled from 'styled-components';

const Policies = () => {
  return (
    <Container>
      <div>
        <h4>Terms and Conditions</h4>
        <ul>
          <li>An initial 50% deposit is required at the time of booking. The remaining 50% is due at check-in.</li>  
          <li>Reservations are not guaranteed without a major credit card authorization at the time of booking. </li>  
          <li>Check-in between 3pm and 10pm. Please call if you require a later check-in time. Additional charges will be applied to check-ins past 11pm.</li>
          <li>Check-out is anytime before 11:00 am. </li>
          <h5> * Early Check-in and/or Late Check-out available on request. Additional charges may apply.</h5>
        </ul>
        <h4>Cancellations</h4>
        <ul>
          <li>Cancellations made within 14 days of your arrival date will forefit your inital deposit.</li> 
          <li>Cancellations made within 24 hours or 'No Shows' will be charged the entire cost of the reservation.</li> 
          <li>Reservations are not guaranteed without a major credit charge card at the time of booking. </li>  
          <li>Early Departure does not guarantee a refund or adjustment to your hotel charges.</li>
        </ul>
        <h4>Damages and Civility</h4>
        <ul>
          <li>Damages incured during your stay will be assesed and added to your guest folio as incidental charges.</li> 
          <li>Acts of violence or unruly behavior will be reported to local authorities and may be subject to expulsion from the Hotel premises.</li> 
          <li>Lobby and Garden hours are from 8am to 11pm.</li> 
        </ul>
        <h4>General</h4>
        <ul>
          <li>Adults Only Hotel. Must be 21 or over to book and stay at the Hotel.</li> 
          <li>No pets or animals allowed on the premises. We abide by the U.S. A.D.A. guidelines and procedures.</li> 
          <li>Smoking is not permited indoors. A $250 fee will be charged to your reservation cost.</li> 
        </ul>
      </div>
    </Container>
  );
};

export default Policies;

const Container = styled.div`
  border: 2px solid #61d1be;
  width: 80vw;
  margin: 40px auto;
  background-color: white;
  div {
    margin: 50px 40px;
  }
  h4 {
    letter-spacing: 0;
  }
  li {
    padding-top: 10px;
  }
  h5 {
    margin: 5px;
    font-weight: 300;
  }
`;