import React, { Component } from 'react';

function Pokemon() {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h2>Pokemon Name</h2>
      <p>Type</p>
      <p>Species</p>
      <p>Strong vs</p>
      <p>Weak vs</p>
      <p>Region</p>
      <p>Pokedex description</p>
      <p>Evolution level</p>
    </div>
  );
}

export default Pokemon;