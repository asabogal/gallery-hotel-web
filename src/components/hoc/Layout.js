import React, {useState} from 'react';
import NavHeader from '../navigation/NavHeader';
import SideNav from '../navigation/SideNav';
import Backdrop from './Backdrop';
import Footer from '../navigation/Footer';

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const closeSideNav = () => {
    setIsOpen(false);
  };

  let backdrop;
  if (isOpen) {
    backdrop = <Backdrop click={closeSideNav}/>
  };

  return (
    <div>
      <NavHeader toggleSideNav={toggleSideNav}/>
      <SideNav open={isOpen} click={closeSideNav}/>
      {backdrop}
      {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;
