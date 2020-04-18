import React from 'react';
import BreweryCard from './BreweryCard.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('BreweryCard', () => {
  it('should render the brewery information on each brewery card', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
    <Router>
      <BreweryCard
        name={'Parleaux Beer Lab'}
        city={'New Orleans'}
      />
    </Router>
    </Provider>;

    const { getByText, getByAltText } = render(testWrapper)

    const nameEl = getByText('Parleaux Beer Lab');
    const cityEl = getByText('New Orleans, LA');
    const altText = getByAltText('Logo for Parleaux Beer Lab');

    expect(nameEl).toBeInTheDocument();
    expect(cityEl).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  })
})
