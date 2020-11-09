import React from 'react'

import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import styles from './CharacterList.css'
import { updateCharacter } from '../../services/charactersApi';

 const UpdateCharacter = () => {
  const { id } = useParams();
  const history = useHistory();

  const detail = useSelector(state => state.character.detail);
  console.log(detail)
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [species, setSpecies] = useState('');
  const [actor, setActor] = useState('');

  const handleChange = ({ target }) => {
    if(target.name ==='name') setName(target.value);
    if(target.name ==='image') setImage(target.value);
    if(target.name ==='species') setSpecies(target.value);
    if(target.name ==='actor') setActor(target.value);

  }
  const handleSubmit = e => {
    e.preventDefault();
    updateCharacter(id, {
      name: name,
      image: image,
      species: species,
      actor: actor
    })
    history.push('/')
  }



 return(
   <section className = {styles.CharacterList}>
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder={detail.name}
            onChange={handleChange}
          /> 
          <label htmlFor="name">Image URL: </label>
          <input
            id="image"
            type="url"
            name="image"
            value={image}
            placeholder={detail.image}
            onChange={handleChange}
          /> <br/>
          <label htmlFor="name">Species: </label>
          <input
            id="species"
            type="text"
            name="species"
            value={species}
            placeholder={detail.species}
            onChange={handleChange}
          /> 
          <label htmlFor="name">Actor: </label>
          <input
            id="actor"
            type="text"
            name="actor"
            value={actor}
            placeholder={detail.actor}
            onChange={handleChange}
          /> <br/>
          
          <button>UPDATE</button>
          <Link to = {"/"}><button>Go Back</button></Link>
          
        </form>
      </header>
    </div>

  </section>

 )
}
 export default UpdateCharacter;
