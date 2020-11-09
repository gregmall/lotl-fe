const URL = process.env.REACT_APP_API_URL;
export const postCharacter = async(character) => {
  
  const res = await fetch(`${URL}/api/v1/characters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });

  const json = await res.json();
  if(!res.ok) throw json;
  
  return json;
};

export const getCharacters = async() => {
  const res = await fetch(`${URL}/api/v1/characters`)
  const json = await res.json();
  if(!res.ok) throw json;
  return json;
}

export const getCharactersById = async(id) => {
  const res = await fetch(`${URL}/api/v1/characters/${id}`)
    const json = await res.json();
    if(!res.ok) throw json;
    return json;
}

export const updateCharacter = async(id, character) => {
  const res = await fetch(`${URL}/api/v1/characters/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });

  const json = await res.json();
  if(!res.ok) throw json;
  
  return json;
};

export const deleteCharacter = id => {
  return fetch(`${URL}/api/v1/characters/${id}`, {
    method: 'DELETE',
    headers: { 'Content_Type': 'application/json' }
  })
  .then(res => res.json())
}
