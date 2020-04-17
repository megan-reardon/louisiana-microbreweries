export const getBreweries = (breweries) => ({
  type: 'GET_BREWERIES',
  breweries
})

export const favoriteBrewery = (favorites) => ({
  type: 'GET_FAVORITES',
  favorites
})
