import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createCharacter } from '../../../actions/characterActions';

const AddCharacter = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [species, setSpecies] = useState('');
  const [actor, setActor] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name ==='name') setName(target.value);
    if(target.name ==='image') setImage(target.value);
    if(target.name ==='species') setSpecies(target.value);
    if(target.name ==='actor') setActor(target.value);

  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createCharacter({
      name,
      image,
      species,
      actor

    }));
    setName('');
    setImage('');
    setSpecies('');
    setActor('');
  }



  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
       /> 
       <label htmlFor="name">Image URL: </label>
      <input
        id="image"
        type="url"
        name="image"
        value={image}
        onChange={handleChange}
       /> 
       <label htmlFor="name">Species: </label>
      <input
        id="species"
        type="text"
        name="species"
        value={species}
        onChange={handleChange}
       /> 
       <label htmlFor="name">Actor: </label>
      <input
        id="actor"
        type="text"
        name="actor"
        value={actor}
        onChange={handleChange}
       /> 
       <button>ADD CHARACTER</button>

        </form>
  )




};

export default AddCharacter;



