import React, { useState } from 'react';

function Sort({ updateSort }) {
  const [ inputValue, setInputValue ] = useState('original')
  
  function handleSubmit(e) {
    e.preventDefault();
    updateSort(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)}}>
        <option value='original'>Original order</option>
        <option value='alphabetical'>Sort alphabetically</option>
        <option value='location'>Sort by location</option>
      </select>
      <button type='submit'>Sort</button>
    </form>
  )
}

export default Sort;