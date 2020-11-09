import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersById, removeCharacter } from '../../actions/characterActions';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from './DetailDisplay.css'

const DetailDisplay = () => {
  const { id } = useParams();
  const history = useHistory();
  const detail = useSelector(state => state.character.detail);
  const dispatch = useDispatch();
 
  useEffect(() =>{
    dispatch(fetchCharactersById(id))
  }, []);
 
  
  const handleDelete = ({ target }) => {
    dispatch(removeCharacter(target.value));
    
    history.push('/');
  };
  
  return (

    <div className={styles.DetailDisplay}>
      <section>
        <p>{detail.name}</p>
        <img src={detail.image} />
        <p>{detail.species}</p>
        <p>{detail.actor}</p>
        <Link to = {"/"}><button>Go Back</button></Link>
        <Link to = {`/update/${id}`}><button>Update?</button></Link>
        <button value ={detail.id} onClick={handleDelete}>DELETE CHARACTER</button>
      </section>

    </div>

  );
};

export default DetailDisplay;

