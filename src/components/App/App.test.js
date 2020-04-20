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
  it('Can view the breweries when the app loads', async() => {
    const store = createStore(rootReducer);
    const utils =
      <Provider store={store}>
        <Router>
          <App
          />
        </Router>
      </Provider>;

    const fetchedBreweries =
    [
      {id: 2941,
      name: "Crying Eagle Brewing Company",
      street: "1165 E McNeese St",
      city: "Lake Charles",
      state: "Louisiana",
      postal_code: "70607-4753",
      phone: "3379904871",
      website_url: "http://www.cryingeagle.com"},
      {
      id: 2944,
      name: "Flying Heart Brewing",
      street: "700 Barksdale Blvd",
      city: "Bossier City",
      state: "Louisiana",
      postal_code: "71111-4502",
      phone: "3183448775",
      website_url: "http://www.flyingheartbrewing.com",
      }
    ]

    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText, getByTestId } = render(utils);
    const breweryName = await waitForElement(() => getByText('Crying Eagle Brewing Company'));
    const cityEl = await waitForElement(() => getByText('Bossier City, LA'));
    const breweryContainer = await waitForElement(() => getByTestId('brewery-container'));

    expect(breweryName).toBeInTheDocument();
    expect(cityEl).toBeInTheDocument();
    expect(breweryContainer).toBeInTheDocument();

});

  it('should be able to navigate to the brewery details page on click of a specific brewery card', async() => {
      const store = createStore(rootReducer);
      const utils =
        <Provider store={store}>
          <Router>
            <App
            />
          </Router>
        </Provider>;

    const fetchedBreweries =
    [
      {id: 2941,
      name: "Crying Eagle Brewing Company",
      street: "1165 E McNeese St",
      city: "Lake Charles",
      state: "Louisiana",
      postal_code: "70607-4753",
      phone: "3379904871",
      website_url: "http://www.cryingeagle.com"},
      {
      id: 2944,
      name: "Flying Heart Brewing",
      street: "700 Barksdale Blvd",
      city: "Bossier City",
      state: "Louisiana",
      postal_code: "71111-4502",
      phone: "3183448775",
      website_url: "http://www.flyingheartbrewing.com",
      }
    ]
    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText,  getByTestId, debug } = render(utils);
    await waitForElement(() => getByTestId('2944 container'));
    fireEvent.click(getByTestId('2944 container'))
    const breweryPhone = await waitForElement(() => getByText("318-344-8775"));

    expect(breweryPhone).toBeInTheDocument();
    fireEvent.click(getByText("Louisiana Micreauxbreweries"))
  });

  it('should render a message of no favorites if a user views favorites but does not have any yet', async () => {
    const store = createStore(rootReducer);
    const utils =
      <Provider store={store}>
        <Router>
          <App
          />
        </Router>
      </Provider>;

  const fetchedBreweries =
  [
    {id: 2941,
    name: "Crying Eagle Brewing Company",
    street: "1165 E McNeese St",
    city: "Lake Charles",
    state: "Louisiana",
    postal_code: "70607-4753",
    phone: "3379904871",
    website_url: "http://www.cryingeagle.com"},
    {
    id: 2944,
    name: "Flying Heart Brewing",
    street: "700 Barksdale Blvd",
    city: "Bossier City",
    state: "Louisiana",
    postal_code: "71111-4502",
    phone: "3183448775",
    website_url: "http://www.flyingheartbrewing.com",
    }
  ]
    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText } = render(utils);
    const favoriteBtn = getByText('View Saved Breweries');
  
    fireEvent.click(favoriteBtn);

    const errMessage = await waitForElement(() => getByText('You do not have any saved breweries yet!'));

    expect(errMessage).toBeInTheDocument();
  })

  it('should show favorite breweries after a user has added them', async () => {
    const store = createStore(rootReducer);
    const utils =
      <Provider store={store}>
        <Router>
          <App
          />
        </Router>
      </Provider>;

  const fetchedBreweries =
  [
    {id: 2941,
    name: "Crying Eagle Brewing Company",
    street: "1165 E McNeese St",
    city: "Lake Charles",
    state: "Louisiana",
    postal_code: "70607-4753",
    phone: "3379904871",
    website_url: "http://www.cryingeagle.com"},
    {
    id: 2944,
    name: "Flying Heart Brewing",
    street: "700 Barksdale Blvd",
    city: "Bossier City",
    state: "Louisiana",
    postal_code: "71111-4502",
    phone: "3183448775",
    website_url: "http://www.flyingheartbrewing.com",
    }
  ]

    apifetchBreweries.mockResolvedValueOnce(fetchedBreweries);
    const { getByText,  getByTestId, debug } = render(utils);
    await waitForElement(() => getByTestId('2941 container'));

    fireEvent.click(getByTestId('2941 container'))
    const saveBtn = await waitForElement(() => getByText("Save this Brewery"));
    const viewSavedBtn = getByText('View Saved Breweries')

    fireEvent.click(saveBtn);
    fireEvent.click(viewSavedBtn);

    const cityEl = await waitForElement(() => getByText('Lake Charles, LA'))
    expect(cityEl).toBeInTheDocument();
  });
})
