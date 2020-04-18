import React from 'react';
import Nav from './Nav.js';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('Nav', () => {
  let utils;
  let store;
  const mockGoToHomepage = jest.fn();
  const mockGoToFavorites = jest.fn();

  beforeEach(() => {
    store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
      <Router>
        <Nav
          goToFavorites={mockGoToFavorites}
          goToHomepage={mockGoToFavorites}
        />
      </Router>
      </Provider>
    )
  });

  afterEach(() => {
    cleanup
  });

  it('should render the website title and logo', () => {

    const { getByText, getByAltText } = utils

    const titleEl = getByText('Louisiana Micreauxbreweries');
    const altText = getByAltText('Fleur de lis logo');
    const buttonEl = getByText('View Favorites');

    expect(titleEl).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });

  it('should call a function to go to the favorites on click', () => {
    const { getByText } = utils;
    const favoriteBtn = getByText('View Favorites');

    fireEvent.click(favoriteBtn);

    expect(mockGoToFavorites).toHaveBeenCalledTimes(1);
  });

  it('should call a function to go to the homepage on click', () => {
    const { getByTestId } = utils;
    const containerEl = getByTestId('nav-container');

    fireEvent.click(containerEl);

    expect(mockGoToHomepage).toHaveBeenCalledTimes(1);

  })
})
