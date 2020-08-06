import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className='tc pa2'>
      <input 
        className='pa3 ba b--yellow bg-lightest-yellow'
        type='searchbox' 
        placeholder='search pokemon' 
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox;