import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../../actions';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import { apifetchBreweries } from '../../apiCalls';

class App extends Component {

  componentDidMount = () => {
    apifetchBreweries()
    .then(data => this.props.fetchBreweries(data))
    .catch(err => console.log(err.message))
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <Nav />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  breweries: state.breweries,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBreweries: breweries => dispatch( getBreweries(breweries))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
