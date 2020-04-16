import React from 'react';
import Nav from './Nav.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('Nav', () => {
  it('should render the website title and logo', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Nav />
    </Provider>

    const { getByText, getByAltText } = render(testWrapper)

    const titleEl = getByText('Louisiana Micreauxbreweries');
    const altText = getByAltText('Fleur de lis logo');

    expect(titleEl).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  })
})
