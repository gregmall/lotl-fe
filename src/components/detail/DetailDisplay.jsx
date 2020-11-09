import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersById, removeCharacter } from '../../actions/characterActions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const DetailDisplay = () => {
  const { id } = useParams();
  const detail = useSelector(state => state.character.detail);
  const dispatch = useDispatch();
  console.log(detail)



  useEffect(() =>{
    dispatch(fetchCharactersById(id))
  }, []);
  console.log(detail)
  
  const handleDelete = ({ target }) => {
    dispatch(removeCharacter(target.value));
  };
  
  

  return (

    <div>
      <p>{detail.name}</p>
      <img src={detail.image} />
      <p>{detail.species}</p>
      <p>{detail.actor}</p>
      <Link to = {"/"}><button>Go Back</button></Link>
      <Link to = {`/update/${id}`}><button>Update?</button></Link>
      <button value ={detail.id} onClick={handleDelete}>DELETE CHARACTER</button>

    </div>

    
  );


};

export default DetailDisplay;

