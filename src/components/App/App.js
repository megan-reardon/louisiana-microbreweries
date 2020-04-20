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
  constructor() {
    super();
    this.state = {
      currentPage: 'home'
    }
  }

  componentDidMount = () => {
    apifetchBreweries()
    .then(data => this.props.fetchBreweries(data))
    .catch(err => console.log(err.message))
  }

  goToFavorites = () => {
    this.setState({currentPage: 'favorites'})
  }

  goToHomepage = () => {
    this.setState({currentPage: 'home'})
  }

  render() {
    return (
      <main>
        <Nav
        goToFavorites={this.goToFavorites}
        goToHomepage={this.goToHomepage}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BreweryContainer
              currentPage={this.state.currentPage}
              />
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
          <Route
            exact
            path="/favorites/"
            render={() => (
               <BreweryContainer
               currentPage={this.state.currentPage}
              />
            )}
          />
          <Route
            path="*"
            render={() => (
               <BreweryContainer
               currentPage={this.state.currentPage}
              />
            )}
          />
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  fetchBreweries: breweries => dispatch( getBreweries(breweries))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
