import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';

class App extends Component {

  render() {
    return (
      <main>
        <Nav />
      </main>
    )
  }
}

export default App;
