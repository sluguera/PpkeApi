import React, { useEffect, useState } from "react";
import "../styles/PokemonList.css";
import { fetchPokemon } from "../service/pokemonService";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };

    getPokemon();
  }, []);

  return (
    <div >
      <h1>Pokemon List</h1>
      <ul className="pokemon-list">
        {pokemon.map((poke, index) => (
          <li key={index} className="pokemon-list-item">
            <Link to={`/pokemon/${poke.name.toLowerCase()}`}>{poke.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
