import React from 'react'
import AddCharacter from './addCharacter';
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateCharacter } from '../../../services/charactersApi';

 const UpdateCharacter = () => {
  const { id } = useParams();

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
      name: this.state.name,
      image: this.state.image,
      species: this.state.species,
      actor: this.state.actor
    })
    this.props.history.push('/');

    
  }



 return(
   <section>
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
       /> 
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
       /> 
       <button>UPDATE</button>

        </form>
        </header>
  </div>

  </section>

 )
}
 export default UpdateCharacter;
