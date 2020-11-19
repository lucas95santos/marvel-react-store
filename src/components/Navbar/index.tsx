import React from 'react';
// styles
import './style.css';
// icons
import { ImSearch } from 'react-icons/im';
// images
import logoImg from '../../assets/images/logo.png';

const Navbar: React.FC = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <nav>
      <div className="nav-content">
        <ul className="nav-content__top">
          <li className="nav-content__top__item" title="Fazer login">
            Entrar
          </li>
          <li
            className="logo-item"
            onClick={scrollToTop}
            title="Marvel React Store"
          >
            <img src={logoImg} alt="Logo" />
          </li>
          <li className="nav-content__top__item" title="Pesquisar">
            <ImSearch />
          </li>
        </ul>
        <div className="nav-divider" />
        <ul className="nav-content__bottom">
          <li>Vingadores</li>
          <li>Homem Aranha</li>
          <li>X-Men</li>
          <li>Quarteto Fantástico</li>
          <li>Guardiões da Galáxia</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
