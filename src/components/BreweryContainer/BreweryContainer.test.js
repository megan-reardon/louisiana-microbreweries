// import React from 'react';
// import BreweryContainer from './BreweryContainer.js';
// import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { rootReducer } from '../../reducers';
// import '@testing-library/jest-dom';
//
// describe('BreweryContainer', () => {
//   it('should render the brewery container', () => {
//     const testStore = createStore(rootReducer);
//     const testWrapper = <Provider store={testStore}>
//       <Router>
//         <BreweryContainer />
//       </Router>
//     </Provider>
//
//     const { getByTestId } = render(testWrapper);
//     const containerEl = getByTestId('brewery-container');
//     expect(containerEl).toBeInTheDocument();
//   });
// })
