import React, { useState } from 'react';

function NewItemForm({ addItem }) {
  const [ formData, setFormData ] = useState({ 
    description: '', 
    image: '', 
    location: ''})

  function handleChange(e, key) {
    setFormData({...formData, [key]: e.target.value});
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/listings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(newItem => addItem(newItem));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' 
        value={formData.description} 
        placeholder={'Description...'}
        onChange={(e) => handleChange(e, 'description')}>
      </input>
      <input type='text' 
        value={formData.image} 
        placeholder={'Image url...'}
        onChange={(e) => handleChange(e, 'image')}>
      </input>
      <input type='text' 
        value={formData.location}
        placeholder={'Location...'}
        onChange={(e) => handleChange(e, 'location')}>
      </input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewItemForm;