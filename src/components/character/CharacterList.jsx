import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../actions/characterActions';
import { Link } from 'react-router-dom';
import AddCharacter from './addCharacter';
import styles from './CharacterList.css';


const CharacterList = () => {
  const characters = useSelector(state => state.character.characters);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCharacters());
  }, []);

  const characterElements = characters.map(character => (
    <Link to = {`/detail/${character.id}`}>
      <li key={character.id} className = {styles.listItem}>
        <p>{character.name}</p>
        <img src={character.image} />
      </li>
    </Link>
  ));

  return (
    <div className={styles.CharacterList}>
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
