import * as actions from '.';

describe('Actions Tests', () => {
  it('should have a type of GET_BREWERIES, and a correct payload of breweries', () => {
    const brewery1 = {id: 2941, name: 'Crying Eagle Brewing Company'};
    const brewery2 = {id: 2944, name: 'Flying Heart Brewing'}

    const expectedAction = {
      type: 'GET_BREWERIES',
      breweries: [brewery1, brewery2]
    }
    const result = actions.getBreweries([brewery1, brewery2])

    expect(result).toEqual(expectedAction);
  })
})
