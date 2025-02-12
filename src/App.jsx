// src/App.jsx

import { useState } from 'react';
import PokemonList from './components/PokemonList/PokemonList';
import NavBar from './components/NavBar/NavBar';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonForm from './components/PokemonForm/PokemonForm';

import {Route, Routes} from 'react-router'

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

//lifting state function
function addPokemon(newPokemonData){
  newPokemonData._id = pokemon.length + 1;
  // update state
  setPokemon([...pokemon, newPokemonData])
}

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<h1>Pokemon Home Page</h1>}/>
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon}/>}/>
        <Route path='/pokemon/new' element={<PokemonForm addPokemon={addPokemon}/>}/>
        <Route path='/pokemon/:pokemonId' element={<PokemonDetails pokemon={pokemon}/>}/>
        <Route path="*" element={<h2>Whoops Nothing here</h2>}/>
      </Routes>
    </>
  );
};

export default App;