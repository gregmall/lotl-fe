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
  
}
