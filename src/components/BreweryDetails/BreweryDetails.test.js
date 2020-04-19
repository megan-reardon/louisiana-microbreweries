import React from 'react';
import BreweryDetails from './BreweryDetails.js';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('BreweryDetails', () => {
  let utils;
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
      <Router>
        <BreweryDetails
          name={'Cajun Brewing'}
          city={'Lafayette'}
          state={'Louisiana'}
          street={'206 Rayburn St'}
          postal_code={'70506-4130'}
          website_url={'http://www.cajunbrewing.com'}
          phone={'3378069196'}

        />
      </Router>
      </Provider>
    )
  });

  afterEach(() => {
    cleanup
  });

  it('should render the details for the selected brewery', () => {
    const { getByText } = utils;
    const nameEl = getByText('Cajun Brewing');
    const addressEl = getByText('206 Rayburn St, Lafayette, Louisiana 70506-4130');
    const phoneEl = getByText('337-806-9196')
    const websiteEl = getByText('http://www.cajunbrewing.com')
    const favoritesBtn = getByText('Save this Brewery')

    expect(nameEl).toBeInTheDocument();
    expect(addressEl).toBeInTheDocument();
    expect(phoneEl).toBeInTheDocument();
    expect(websiteEl).toBeInTheDocument();
    expect(favoritesBtn).toBeInTheDocument();
  });

  it('the save brewery button should change to a remove brewery button after brewery has been favorited', () => {
    const { getByText, debug } = utils;
    const favoriteBtn = getByText('Save this Brewery');

    fireEvent.click(favoriteBtn);
    const removeBtn = getByText('Remove from Saved Breweries')

    expect(removeBtn).toBeInTheDocument();
  });
})
