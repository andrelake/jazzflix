import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <img
        src={Logo}
        alt="Logo JazzFlix"
      />
    </FooterBase>
  );
}

export default Footer;
