import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  const styleFooter = {
    backgroundColor: 'green',
    position: 'fixed',
    width: '100vw',
    marginTop: '68.995vh',
    marginBottom: '0',
    display: 'flex',
    justifyContent: 'space-around',
  };

  return (
    <footer
      data-testid="footer"
      style={ styleFooter }
    >

      <Link to="/drinks">
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="drinkIcon"
        />
      </Link>

      <Link to="/explore">
        <img
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
          alt="exploreIcon"
        />
      </Link>
      <Link to="/">
        <img
          src={ mealIcon }
          data-testid="food-bottom-btn"
          alt="mealIcon"
        />
      </Link>
    </footer>
  );
};

export default Footer;

// Footer das telas de Receitas de bebidas, comidas e seus detalhes
// o ''explorer'' redireciona para a busca por comidas e bebidas
// de acordo com a pagina de testes cypress/integration/19-footer_spec.js
