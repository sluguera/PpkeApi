export const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      return data.results; // Retorna solo los resultados
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return []; // Retorna un array vacío en caso de error
    }
    
  };

  export const fetchPokemonDetails = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data; // Retorna todos los detalles del Pokémon
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
      return null; // Retorna null en caso de error         
    }}