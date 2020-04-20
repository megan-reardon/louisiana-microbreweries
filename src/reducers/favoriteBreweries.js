export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.favorites];
    case 'REMOVE_FAVORITE':
    let breweryInQuestion = state.find(brewery => {
      return brewery.id === action.favorite.id
    })
    let brewIndex = state.indexOf(breweryInQuestion);
      state.splice(brewIndex, 1);
      return [...state]
    default:
      return state
  }
}
