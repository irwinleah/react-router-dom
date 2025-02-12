// src/components/PokemonForm/PokemonForm.jsx

import { useState } from 'react';
import './PokemonForm.css'
import { useNavigate } from 'react-router';

const initialState = {
    name: '',
    weight: 0,
    height: 0,

  };

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  // From react router, initialize the hook
  const navigate = useNavigate()
  // navigate is a function that accepts 
  // a path for a route!

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO : complete submit logic
    props.addPokemon(formData)
    // reset the form
    setFormData(initialState)
    // react router 
    navigate('/pokemon')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // function handleSelectChange(e){
  //   console.log(e.target.name, e.target.value)
  // }
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  return (
    <main className='pokemon-form'>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
 
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;