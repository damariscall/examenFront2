import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) return <div>No hay favoritos.</div>;

  return (
    <div>
      <h1>Favoritos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {favorites.map((character) => (
          <div key={character.id} style={{ border: '1px solid #ddd', padding: '16px' }}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <button onClick={() => removeFavorite(character.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
