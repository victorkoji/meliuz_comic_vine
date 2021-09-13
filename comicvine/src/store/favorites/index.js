const INITIAL_STATE = [];

export const ActionsTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
}

export const ActionsCreators = {
  addFavorite: (favorite) => ({ type: ActionsTypes.ADD_FAVORITE, favorite: favorite }),
  removeFavorite: (favorite) => ({ type: ActionsTypes.REMOVE_FAVORITE, favorite: favorite }),
}

export default function favoritesCharacters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionsTypes.ADD_FAVORITE:
      state = [...state, action.favorite];
      break;

    case ActionsTypes.REMOVE_FAVORITE:
      let indexFavorite = state.indexOf(action.favorite);

      if (indexFavorite !== -1) {
        state = [
          ...state.slice(0, indexFavorite),
          ...state.slice(indexFavorite + 1),
        ];
      }

      break;
      
    default:
      state = state
      break;
  }

  return state;
}
