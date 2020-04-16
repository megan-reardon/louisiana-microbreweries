import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreweryDetails = (props) => {
  const { id, name, city, state, street, postal_code, website_url } = props
  return (
    <div>
      <h2>{street}</h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})

export default BreweryDetails;
