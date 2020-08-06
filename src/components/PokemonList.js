import React from 'react';
import PokeCard from './PokeCard'; 

const PokemonList = ({pokemon}) => {
  return (
    <div>
      {
        pokemon.map((user, i) => {
          return ( 
            <PokeCard 
              key={i} 
              id={pokemon[i].id} 
              name={pokemon[i].name} 
              height={pokemon[i].height} 
              weight={pokemon[i].weight} 
            />
          );
        })
      }
    </div>
  );
}

export default PokemonList;