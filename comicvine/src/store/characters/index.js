const INITIAL_STATE = {
  filterType: "all",
  characters: [],
};

export const ActionsTypes = {
  FETCH_CHARACTERS: 'FETCH_CHARACTERS',
  EDIT_CHARACTER: 'EDIT_CHARACTER',
  CHANGE_FILTER_TYPE: 'CHANGE_FILTER_TYPE'
};

export const ActionsCreators = {
  fetchCharacters: (characters) => ({ type: ActionsTypes.FETCH_CHARACTERS, characters: characters }),
  editCharacter: (character) => ({ type: ActionsTypes.EDIT_CHARACTER, character: character }),
  changeFilterType: (filter) => ({ type: ActionsTypes.CHANGE_FILTER_TYPE, filterType: filter }),
}

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionsTypes.FETCH_CHARACTERS:
      const newCharacters = action.characters;
      const oldCharacters = state.characters.filter( (char) => !newCharacters.some((newCharacter) => newCharacter.id === char.id) );

      state = {
        ...state,
        characters: oldCharacters.concat(newCharacters),
      };
      break;

    case ActionsTypes.EDIT_CHARACTER:
      const indexCharacter = state.characters.findIndex(
        (char) => char.id == action.character.id
      );
      const editedCharacter = action.character;

      state = {
        ...state,
        characters: [
          ...state.characters.slice(0, indexCharacter),
          editedCharacter,
          ...state.characters.slice(indexCharacter + 1),
        ],
      };

      break;

    case ActionsTypes.CHANGE_FILTER_TYPE:
      state = {
        ...state,
        filterType: action.filterType
      };

      break;

    default:
      state = state
      break;
  }

  return state;
}
