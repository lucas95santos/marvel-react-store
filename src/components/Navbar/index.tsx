import React from 'react';
// styles
import './style.css';
// images
import { ImSearch } from 'react-icons/im';
import logoImg from '../../assets/images/logo.png';
// icons

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-content">
        <ul className="nav-content__top">
          <li className="nav-content__top__item">Entrar</li>
          <li>
            <img src={logoImg} alt="Logo" />
          </li>
          <li className="nav-content__top__item">
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
