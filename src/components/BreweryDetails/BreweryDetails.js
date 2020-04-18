import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BreweryDetails extends Component {

  toggleFavoriteButton = () => {
    const matchingBrewery = this.props.favorites.find(favorite => {
      return favorite.id === this.props.id
    })
    if (matchingBrewery) {
      return (
        <button onClick={this.removeFromFavorites}>Remove from Saved Breweries</button>
      )
    } else {
      return (
        <button onClick={this.addToFavorites}>Save this Brewery</button>
      )
    }
  }

  removeFromFavorites = (e) => {
    e.preventDefault();
  }

  addToFavorites = (e) => {
    e.preventDefault();
    this.props.addFavoriteBreweries({
      id: this.props.id,
      name: this.props.name,
      city: this.props.city,
      state: this.props.state,
      street: this.props.street,
      postal_code: this.props.postal_code,
      phone: this.props.phone,
      website_url: this.props.website_url
    })
  }

  render() {
    const { id, name, city, state, street, postal_code, website_url, phone } = this.props
    return (
      <div className='brewery-details-container'>
      <section className='brewery-image'>
        <img src={`../../../images/${id}.jpg`} />
        </section>
        <section className='brewery-info'>
        <h1>{name}</h1>
        <h1>Address: {street}, {city}, {state} {postal_code}</h1>
        <h1>Website: {website_url}</h1>
        <h1>Phone: {phone}</h1>
        {this.toggleFavoriteButton()}

      </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addFavoriteBreweries: favorites => dispatch(
    addFavorite(favorites))
})

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

export default connect(mapStateToProps, mapDispatchToProps)(BreweryDetails);
