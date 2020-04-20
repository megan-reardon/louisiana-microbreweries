import React from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryContainer = ({ breweries, favorites, currentPage }) => {
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

  if (currentPage === 'home') {
    return (
      <section data-testid='brewery-container' className='brewery-container'>
        {breweryInfo}
      </section>
    )
  } else if (currentPage === 'favorites' && favoriteBreweryInfo.length > 0) {
    return (
      <section data-testid='brewery-container' className='brewery-container'>
        {favoriteBreweryInfo}
      </section>
    )
  } else {
    return (
      <section className='no-favorites'>
        <h2>You do not have any saved breweries yet!</h2>
      </section>
    )
  }
}

BreweryContainer.propTypes = {
  favorites: PropTypes.array,
  breweries: PropTypes.array,
  currentPage: PropTypes.string
}

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(BreweryContainer);
