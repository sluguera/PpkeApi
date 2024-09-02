import React from "react";

const Card = ({ pokemon, onToggleSeen, isSeen }) => {
  return (
    <div className={`card ${isSeen ? 'seen' : 'not-seen'}`}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {onToggleSeen && (
        <button onClick={() => onToggleSeen(pokemon.name)}>
          {isSeen ? "Mark as Unseen" : "Mark as Seen"}
        </button>
      )}
    </div>
  );
};

export default Card;
