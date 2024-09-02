import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../service/pokemonService";
import { useSelector, useDispatch } from "react-redux";
import { addToTeam, removeFromTeam, markAsSeen, markAsUnseen } from "../features/team/teamSlice";
import Card from "../components/Card";

const PokemonDetailPage = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team.value);
    const seenPokemons = useSelector((state) => state.team.seen);

    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(name);
                setPokemon(data);
            } catch (err) {
                console.error("Failed to fetch Pokémon details:", err);
                setError("Failed to fetch Pokémon details. Please try again later.");
            }
        };

        getPokemonDetails();
    }, [name]);

    const isInTeam = pokemon ? team.some((pokemonName) => pokemonName === pokemon.name) : false;
    const isSeen = seenPokemons.includes(pokemon?.name);

    const handleToggleTeam = () => {
        if (isInTeam) {
            dispatch(removeFromTeam(pokemon.name));
        } else {
            dispatch(addToTeam(pokemon.name));
        }
    };

    const handleToggleSeen = () => {
        if (isSeen) {
            dispatch(markAsUnseen(pokemon.name));
        } else {
            dispatch(markAsSeen(pokemon.name));
        }
    };

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!pokemon) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <Card pokemon={pokemon} onToggleSeen={handleToggleSeen} isSeen={isSeen} />
            <button onClick={handleToggleTeam}>
                {isInTeam ? "Remove from Team" : "Add to Team"}
            </button>
        </div>
    );
};

export default PokemonDetailPage;
