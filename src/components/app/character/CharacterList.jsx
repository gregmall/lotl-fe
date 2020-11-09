import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../../actions/characterActions';
import { Link } from 'react-router-dom';
import AddCharacter from './addCharacter';


const CharacterList = () => {
  const characters = useSelector(state => state.character.characters);
  console.log(characters)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCharacters());
  }, []);

  const characterElements = characters.map(character => (
    <Link to = {`/detail/${character.id}`}>
    <li key={character.id}>
      <p>{character.name}</p>
      <img src={character.image} />
      <p>{character.species}</p>
      <p>{character.actor}</p>
    </li>
    </Link>
  ));

  return (
    <div>
      <header>
      <AddCharacter />
      </header>
    <ul data-testid="characters">
      {characterElements}
    </ul>
 
  </div>
 );
};
export default CharacterList;
