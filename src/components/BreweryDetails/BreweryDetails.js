import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BreweryDetails extends Component {
  constructor() {
    super();
    this.state = {
      favoriteBreweries: []
    }
  }

  addToFavorites = (e) => {
    e.preventDefault();
    this.setState({favoriteBreweries: [...this.state.favoriteBreweries, this.props]})
  }

  render() {
    const { id, name, city, state, street, postal_code, website_url } = this.props
    return (
      <div className='brewery-details-container'>
      <section className='brewery-image'>
      <img src={`../../../images/${id}.jpg`} />
      </section>
      <section className='brewery-info'>
      <h1>{name}</h1>
      <h1>Address: {street}, {city}, {state} {postal_code}</h1>
      <h1>Website: {website_url}</h1>
      <button onClick={this.addToFavorites}>Add to Saved Breweries</button>
      </section>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//
// })

const mapStateToProps = (state) => ({
  breweries: state.breweries
})

export default connect(mapStateToProps, null)(BreweryDetails);
