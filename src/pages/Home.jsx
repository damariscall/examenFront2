import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Home = () => {
const [characters, setCharacters] = useState([]);
const { addFavorite } = useFavorites();

useEffect(() => {
const fetchCharacters = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setCharacters(data.results);
};
fetchCharacters();
}, []);

return (
<div>
    <h1>Personajes de Rick and Morty</h1>
    <div
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
    }}
    >
    {characters.map((character) => (
        <div
        key={character.id}
        style={{ border: "1px solid #ddd", padding: "16px" }}
        >
        <img
            src={character.image}
            alt={character.name}
            style={{ width: "100%" }}
        />
        <h2>{character.name}</h2>
        <Link to={`/character/${character.id}`}>Ver Detalles</Link>
        <button onClick={() => addFavorite(character)}>
            Agregar a Favoritos
        </button>
        </div>
    ))}
    </div>
</div>
);
};

export default Home;
