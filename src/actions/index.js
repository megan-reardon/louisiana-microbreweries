export const getBreweries = (breweries) => ({
  type: 'GET_BREWERIES',
  breweries
})

export const addFavorite = (favorites) => ({
  type: 'ADD_FAVORITE',
  favorites
})
