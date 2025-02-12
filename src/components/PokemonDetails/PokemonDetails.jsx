// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";


const PokemonDetails = (props) => {
    // Always verify that any props are being passed correctly!
    console.log(props); 

    // const params = useParams()
    // console.log(params, "< --- params")

    // pokemonId is coming from the Param name in the route
    //<Route path='/pokemon/:pokemonId'  <------
    const { pokemonId } = useParams()

    // find the pokemon in the props that match pokemonId in the params 
    // aka the number in the url
    const singlePokemon = props.pokemon.find((pokemon) => {
        return pokemon._id === Number(pokemonId)
    })

    console.log(singlePokemon)
    return (
      <>
        <h2>{singlePokemon.name}</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;