import React from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryContainer = ({ breweries }) => {
  let breweryInfo = breweries.map(brewery => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        city={brewery.city}
      />)
  })

  return (
    <section>
      {breweryInfo}
    </section>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})

export default connect(mapStateToProps, null)(BreweryContainer);
