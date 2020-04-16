import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreweryDetails = (props) => {
  const { id, name, city, state, street, postal_code, website_url } = props
  return (
    <article className='brewery-details-container'>
      <section className='brewery-image'>
        <img src={`../../../images/${id}.jpg`} />
      </section>
    </article>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})

export default BreweryDetails;
