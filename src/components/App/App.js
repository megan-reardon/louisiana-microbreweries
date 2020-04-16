import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../../actions';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import BreweryDetails from '../BreweryDetails/BreweryDetails';
import { apifetchBreweries } from '../../apiCalls';

class App extends Component {

  componentDidMount = () => {
    apifetchBreweries()
    .then(data => this.props.fetchBreweries(data))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BreweryContainer />
            )}
          />
          <Route
            path="/breweries/:id/" exact
            render={({ match }) => {
              const selectedBrewery = this.props.breweries.find(brewery => parseInt(match.params.id) === brewery.id)
              return <BreweryDetails
                     {...selectedBrewery}
                     />
            }}
          />
        </Switch>
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
