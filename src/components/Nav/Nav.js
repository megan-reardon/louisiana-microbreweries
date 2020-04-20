import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const Nav = ({ goToFavorites, goToHomepage }) => {
  return (
    <header>
      <div data-testid='nav-container' onClick={goToHomepage}>
      <Link
      className="header-logo"
      to={'/'}
      >
        <img src='../../../logos/fleur-de-lis.svg' alt='Fleur de lis logo'/>
        <h2>Louisiana Micreauxbreweries</h2>
      </Link>
      </div>
      <NavLink
      to={'/favorites'}
      >
        <button onClick={goToFavorites}>View Saved Breweries</button>
      </NavLink>
    </header>
  )
}

Nav.propTypes = {
  goToHomepage: PropTypes.func,
  goToFavorites: PropTypes.func
}

export default Nav;
