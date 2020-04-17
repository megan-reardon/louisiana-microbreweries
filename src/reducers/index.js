import { combineReducers } from 'redux';
import { breweries } from './breweries';
import { favorites } from './favoriteBreweries';

export const rootReducer = combineReducers({
  breweries,
  favorites
})
