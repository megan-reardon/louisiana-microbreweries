export const getBreweries = (breweries) => ({
  type: 'GET_BREWERIES',
  breweries
})

export const addFavorite = (favorites) => ({
  type: 'ADD_FAVORITE',
  favorites
})

export const removeFavorite = (favorite) => ({
  type: 'REMOVE_FAVORITE',
  favorite
})
