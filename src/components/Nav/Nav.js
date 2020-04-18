import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ goToFavorites, goToHomepage }) => {

  return (
    <header>
      <div data-testid='nav-container' onClick={goToHomepage}>
      <Link
      to={'/'}
      >
        <img src='../../../logos/fleur-de-lis.svg' alt='Fleur de lis logo'/>
        <h2>Louisiana Micreauxbreweries</h2>
      </Link>
      </div>
      <div className='favorites-container'>
      <Link
      to={'/favorites'}
      >
        <button onClick={goToFavorites}>View Saved Breweries</button>
      </Link>
      </div>
    </header>
  )
}

export default Nav;
