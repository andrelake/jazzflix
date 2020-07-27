import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="jazzflix logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
