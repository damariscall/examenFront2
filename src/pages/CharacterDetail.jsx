import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Género: {character.gender}</p>
    </div>
  );
};

export default CharacterDetail;
