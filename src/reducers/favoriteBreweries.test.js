import { favorites } from './favoriteBreweries';

describe('favorite Breweries reducers test', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should add a brewery to the favorites array if the action type is ADD_FAVORITE', () => {
    const initialState = [{id: 2944, name: 'Flying Heart Brewing'}];
    const expected = [{id: 2944, name: 'Flying Heart Brewing'}, {id: 2941, name: 'Crying Eagle Brewing Company'}];

    const action = {
      type: 'ADD_FAVORITE',
      favorites: {id: 2941, name: 'Crying Eagle Brewing Company'}
    }

    const result = favorites(initialState, action);
    expect(result).toEqual(expected);
  });

  it('should remove a brewery from the favorites array if the action type is REMOVE_FAVORITE', () => {
    const initialState = [{id: 2944, name: 'Flying Heart Brewing'}, {id: 2941, name: 'Crying Eagle Brewing Company'}];
    const expected = [{id: 2944, name: 'Flying Heart Brewing'}]

    const action = {
      type: 'REMOVE_FAVORITE',
      favorite: {id: 2941, name: 'Crying Eagle Brewing Company'}
    }

    const result = favorites(initialState, action);
    expect(result).toEqual(expected);
  })
});
