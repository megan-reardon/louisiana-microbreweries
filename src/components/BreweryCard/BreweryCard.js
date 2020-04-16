import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryCard = ({ id, name, city }) => {
  return (
    <div>
      <h2>
      {name}
      </h2>
      <h2>
      {city}
      </h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})


export default connect(mapStateToProps, null)(BreweryCard);
