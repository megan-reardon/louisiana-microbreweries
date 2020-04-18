import React from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryContainer = ({ breweries, favorites }) => {
  let breweryInfo = breweries.map(brewery => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        city={brewery.city}
      />)
  })

  let favoriteBreweryInfo = favorites.map(favorite => {
    return (
      <BreweryCard
        key={favorite.id}
        id={favorite.id}
        name={favorite.name}
        city={favorite.city}
      />)
  })

  if (window.location.href === 'http://localhost:3000/') {
    return (
      <section data-testid='brewery-container' className='brewery-container'>
      {breweryInfo}
      </section>
    )
  } else if (window.location.href === 'http://localhost:3000/favorites') {
    return (
      <section data-testid='brewery-container' className='brewery-container'>
      {favoriteBreweryInfo}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(BreweryContainer);
