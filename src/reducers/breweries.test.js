import { breweries } from './breweries';

describe('Breweries reducers test', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = breweries(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of breweries if the action type is GET_BREWERIES', () => {
    const initialState = [];
    const expected = [{id: 2941, name: 'Crying Eagle Brewing Company'}, {id: 2944, name: 'Flying Heart Brewing'}];

    const action = {
      type: 'GET_BREWERIES',
      breweries: [{id: 2941, name: 'Crying Eagle Brewing Company'}, {id: 2944, name: 'Flying Heart Brewing'}]
    }
    const result = breweries(initialState, action);

    expect(result).toEqual(expected);
  });
})
