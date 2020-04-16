import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import { apifetchBreweries } from '../apiCalls'

class App extends Component {

  componentDidMount = () => {
    apifetchBreweries()
    .then(data => this.props.fetchBreweries(data.breweries))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
        <Nav />
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBreweries: breweries => dispatch( getBreweries(breweries))
})

export default App;
