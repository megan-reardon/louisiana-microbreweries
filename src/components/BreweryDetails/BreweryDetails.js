import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';
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

  removeFromFavorites = () => {
    this.props.removeFavoriteBrewery({
      id: this.props.id,
    })
  }

  addToFavorites = () => {
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
        <img className='brewery-image' src={`../../../images/${id}.jpg`} />
      <section className='brewery-info'>
      <img className='brewery-logo' src={`../../../logos/${id}.png`} />
        <h2>{name}</h2>
        <p>Address: {street}, {city}, {state} {postal_code}</p>
        <p className='website-url'>Website: <a href={website_url}>{website_url}</a></p>
        <p>Phone: {phone}</p>
        {this.toggleFavoriteButton()}
      </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addFavoriteBreweries: favorites => dispatch(
    addFavorite(favorites)),
  removeFavoriteBrewery: favorite => dispatch(
    removeFavorite(favorite))
})

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

export default connect(mapStateToProps, mapDispatchToProps)(BreweryDetails);
