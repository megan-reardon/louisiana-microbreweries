import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import { apifetchBreweries } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {
  let utils;
  let store;
  let fetchedBreweries;

  beforeEach(() => {
    fetchedBreweries =
      [
        {id: 2941,
        name: "Crying Eagle Brewing Company",
        brewery_type: "micro",
        street: "1165 E McNeese St",
        city: "Lake Charles",
        state: "Louisiana",
        postal_code: "70607-4753",
        phone: "3379904871",
        website_url: "http://www.cryingeagle.com"}
      ]


    store = createStore(rootReducer);
    utils =
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>;

  });

  afterEach(() => {
    cleanup
  });

  it('Can view the breweries when the app loads', async() => {
    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { debug, getByText } = render(utils);


    const breweryName = await waitForElement(() => getByText('Crying Eagle Brewing Company'))

    expect(breweryName).toBeInTheDocument();
  });

})
