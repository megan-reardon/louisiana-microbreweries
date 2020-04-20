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
        website_url: "http://www.cryingeagle.com"},
        {
        id: 2944,
        name: "Flying Heart Brewing",
        brewery_type: "micro",
        street: "700 Barksdale Blvd",
        city: "Bossier City",
        state: "Louisiana",
        postal_code: "71111-4502",
        phone: "3183448775",
        website_url: "http://www.flyingheartbrewing.com",
        }
      ]

    store = createStore(rootReducer);
    utils =
      <Provider store={store}>
        <Router>
          <App
            // currentPage={'favorites'}
            // favorites={[]}
          />
        </Router>
      </Provider>;
  });

  afterEach(() => {
    cleanup
  });

  it('Can view the breweries when the app loads', async() => {
    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText } = render(utils);
    const breweryName = await waitForElement(() => getByText('Crying Eagle Brewing Company'))
    const cityEl = await waitForElement(() => getByText('Bossier City, LA'))

    expect(breweryName).toBeInTheDocument();
    expect(cityEl).toBeInTheDocument();
  });

  it('should be able to navigate to the brewery details page on click of a specific brewery card', async () => {
    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText,  getByTestId } = render(utils);
    await waitForElement(() => getByTestId('2944 container'));

    fireEvent.click(getByTestId('2944 container'))
    const breweryPhone = await waitForElement(() => getByText("318-344-8775"));

    expect(breweryPhone).toBeInTheDocument();
  });

  // it('should render a message of no favorites if a user views favorites but does not have any yet', async () => {
  //   apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
  //   const { getByText } = render(utils);
  //   const favoriteBtn = getByText('View Saved Breweries');
  //
  //   fireEvent.click(favoriteBtn);
  //
  //   const errMessage = await waitForElement(() => getByText('You do not have any saved breweries'));
  //
  //   expect(errMessage).toBeInTheDocument();
  // })
})
