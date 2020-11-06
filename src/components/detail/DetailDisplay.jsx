import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersById } from '../../actions/characterActions';
import { useParams } from 'react-router-dom';


const DetailDisplay = () => {
  const { id } = useParams();
  const detail = useSelector(state => state.character.detail);
  const dispatch = useDispatch();
  console.log(detail)



  useEffect(() =>{
    dispatch(fetchCharactersById(id))
  }, []);
  console.log(detail)
  
  
  

  return (

    <div>
    <p>{detail.name}</p>
    <img src={detail.image} />
    <p>{detail.species}</p>
    <p>{detail.actor}</p>
    </div>

    
  );


};

export default DetailDisplay;

