import { getCharacters, getCharactersById, postCharacter, deleteCharacter } from '../services/charactersApi'; 

export const ADD_CHARACTER = 'ADD_CHARACTER';
export const addCharacter = character => ({
  type: ADD_CHARACTER,
  payload: character
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const SET_CHARACTERS = 'SET_CHARACTERS';
export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters
});

export const SET_DETAIL = 'SET_DETAIL';
export const setDetail = detail => ({
  type: SET_DETAIL,
  payload: detail
});

export const DELETE_CHARACTER = 'DELETE_CHARACTER';


export const createCharacter = character => dispatch => {
  postCharacter(character)
  .then(createdCharacter =>{
    dispatch(addCharacter(createdCharacter));
  });

};

export const fetchCharacters = () => dispatch => {
  getCharacters()
  .then(characters => {
    dispatch(setCharacters(characters));
  });
};

export const fetchCharactersById = id => dispatch => {
  getCharactersById(id)
    .then(character => {
      dispatch(setDetail(character))
      
    })
  };

export const removeCharacter = id => dispatch => {
  deleteCharacter(id)
    .then(character => {
      dispatch({
        type: DELETE_CHARACTER,
        payload: character.id
      });
    });

    
};


