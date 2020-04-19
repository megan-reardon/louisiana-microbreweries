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
  });

  it('should have a type of ADD_FAVORITE, and a correct payload of favorites', () => {
    const favorite1 = {id: 2941, name: 'Crying Eagle Brewing Company'};
    const favorite2 = {id: 2944, name: 'Flying Heart Brewing'};

    const expectedAction = {
      type: 'ADD_FAVORITE',
      favorites: [favorite1, favorite2]
    }
    const result = actions.addFavorite([favorite1, favorite2])

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_FAVORITE, and a correct payload of favorite', () => {
    const favorite1 = {id: 2941, name: 'Crying Eagle Brewing Company'};
    const favorite2 = {id: 2944, name: 'Flying Heart Brewing'};

    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      favorite: [favorite1]
    }
    const result = actions.removeFavorite([favorite1])

    expect(result).toEqual(expectedAction);
  })
})
