import React from 'react';

const PokeCard = ({ name, height, weight, id }) => {
  return (
    <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <div className='fw1'>
        <h2>{name}</h2>
        <p>Height: {height} decimetres</p>
        <p>Weight: {weight} hectograms</p>
      </div>
    </div>
  );
}

export default PokeCard;