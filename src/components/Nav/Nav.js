import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <header>
      <div>
        <img src='../../../logos/fleur-de-lis.svg' alt='Fleur de lis logo'/>
        <h2>Louisiana Micreauxbreweries</h2>
      </div>
      <div className='favorites-container'>
      <Link
      to={'/breweries/favorites'}
      >
        <button>View Favorites</button>
      </Link>
      </div>
    </header>
  )
}

export default Nav;
