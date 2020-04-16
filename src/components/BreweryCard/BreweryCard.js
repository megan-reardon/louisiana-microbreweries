import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryCard = ({ id, name, city }) => {
  return (
    <div className='brewery-card'>
      <img src={`../../../logos/${id}.png`} />
      <div className='brewery-city-container'>
        <h2>
        {name}
        </h2>
        <h1>
        {city}, LA
        </h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})


export default connect(mapStateToProps, null)(BreweryCard);
