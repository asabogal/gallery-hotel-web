import React from 'react';
import styled from 'styled-components';
import {CloseButton} from '../utils/Buttons';
import SocialBar from '../utils/SocialBar';
import {Link} from 'react-router-dom';

const SideNav = (props) => {
  return (
    <NavContainer open={props.open}>
      <Header>
        <SocialBar color='white' size='lg'/>
        <CloseButton size='lg'
          color='white'
          click={props.click}
        />
      </Header>
      
      <MainNav>
        <LinksContainer>
          <div onClick={props.click}>  
            <Link to='/gallery-hotel-web'>HOME</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/location'>LOCATION</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/rooms'>ROOMS</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/amenities'>AMENITIES</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/eatdrink'>EAT & DRINK</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/events_blocks'>EVENTS & BLOCKS</Link>
          </div>
          <div onClick={props.click}>
            <Link to='/contact'>CONTACT US</Link>
          </div>
          <div onClick={props.click}>
            <a href='https://galleryhotelny.client.innroad.com'>RESERVE</a>
          </div>                                                             
        </LinksContainer>
        
        <SubLinksContainer>
          <div onClick={props.click}>
            <Link to='/policies'>Terms & Conditions</Link>
          </div>
        </SubLinksContainer>
      </MainNav>
 
      <Footer>
        <AdressContainer>
          <a href="mailto:info@galleryhotelny.com"><h4>info@galleryhotelny.com</h4></a>
          <a href="tel: +1-631-477-4000"><h4>631-477-4000</h4></a>
          <a href="https://goo.gl/maps/1VRrR5PhMrXCVvKm7" target="_blank" rel="noopener noreferrer"><h5>439 Main Street</h5></a>
          <h5>Greenport, NY 11944</h5>
        </AdressContainer>
      </Footer>
    </NavContainer>
  );
};

export default SideNav;

const NavContainer = styled.div`
  position: fixed;
  height: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 45%;
  background-color: #0c284f;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.25s ease-out;
  z-index: 999;
  @media (max-width: 450px) {
    width: 100%;
    transition: transform 0.15s ease-out;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  /* padding: 0 5vw; */
`;

const MainNav = styled.div`
  text-align: center;
  justify-content: center;
  justify-self: center;
  display: grid;
  grid-template-rows: auto auto;
  margin-top: 20px;
`;

const LinksContainer = styled.div`
  text-align: center;
  div {
    margin: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    :hover {
      text-decoration: underline;
    }
    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
`;

const SubLinksContainer = styled.div`
  margin-top: 20px;
  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Footer = styled.div`
  justify-self: center;
  text-align: center;
  margin-top: 5vh;
`;

const AdressContainer = styled.div`
  color: white;
  margin-bottom: 10px;
   h4 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h5 {
    font-size: 14px;
    font-weight: 300;
    margin-block-start: 3px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
`;

      // OLD STYLE:

//       const Container = styled.li`
// //   display: flex;
// //   flex-direction: column;
// //   height: 100%;
// //   background-color: #042142;
// //   box-shadow: 1px 0px 10px rgba(0,0,0,0.5);
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100vw;
// //   min-width: 300px;
// //   z-index: 999;
// //   transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
// //   transition: transform 0.15s ease-out;
// //   li {
// //     align-items: center;
// //     padding-left:30px;
// //     :hover {
// //       background-color: #153963;
// //       cursor: pointer;
// //     }
// //   }
// //   a {
// //     display: block;
// //     width: 100%;
// //     font-size: 20px;
// //     text-decoration: none;
// //     color: white;
// //     padding: 20px;
// //     margin-left: 20px;
// //   }
// // `;


// OLD CONTENT:

 {/* <div onClick={props.click}>
        <Link to='/'>HOME</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/location'>LOCATION</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/rooms'>ROOMS</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/amenities'>AMENITIES</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/eatdrink'>EAT & DRINK</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/events_blocks'>EVENTS & BLOCKS</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/contact'>CONTACT US</Link>
      </div>
      <div onClick={props.click}>
        <Link to='/'>RESERVE</Link>
      </div> */}

