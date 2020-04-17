export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.favorites];
    case 'REMOVE_FAVORITE':
      return state 
    default:
      return state = [];
  }
}
