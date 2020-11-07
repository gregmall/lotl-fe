import { ADD_CHARACTER, SET_CHARACTERS, SET_LOADING, SET_DETAIL } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: false,
  detail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return {...state, character: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_CHARACTERS:
      return {...state, characters: action.payload };
    case SET_DETAIL:
      return {...state, detail: action.payload};
   
  
    default:
      return state;
  };

}
