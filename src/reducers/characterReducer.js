import { ADD_CHARACTER, SET_LOADING } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return {...state, character: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
  
    default:
      return state;
  };

}
