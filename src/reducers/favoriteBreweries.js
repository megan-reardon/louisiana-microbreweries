export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.favorites;
    default:
      return state = [];
  }
}
