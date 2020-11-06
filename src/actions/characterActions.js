import { getCharacter, postCharacter } from '../services/charactersApi'; 

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

export const createCharacter = character => dispatch => {
  postCharacter(character)
  .then(createdCharacter =>{
    dispatch(addCharacter(createdCharacter));
  });

};
