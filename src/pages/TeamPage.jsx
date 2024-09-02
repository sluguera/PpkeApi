import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const TeamPage = () => {
  const team = useSelector((state) => state.team.value);
  const seenPokemons = useSelector((state) => state.team.seen);

  return (
    <div>
      <h1>Equipo Pokémon</h1>
      <ul>
        {team.map((pokemonName) => (
          <li key={pokemonName}>
            {/* Aquí necesitas una forma de obtener los detalles del Pokémon, 
                por ejemplo, podrías hacer otro fetch o asegurarte de tener los datos 
                en el estado. */}
            <Card 
              pokemon={{ name: pokemonName, sprites: { front_default: 'URL_AQUI' }, height: 'ALTURA', weight: 'PESO' }} 
              isSeen={seenPokemons.includes(pokemonName)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamPage;
