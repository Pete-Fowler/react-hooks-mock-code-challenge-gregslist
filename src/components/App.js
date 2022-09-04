import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => {
        setListings(data);
      });
  }, [])

  function deleteItem(id) {
    setListings(listings => 
      listings.filter(listing => listing.id !== id));
  }

  function updateSearchTerm(string) {
    setSearchTerm(string);
  }

  const listingsShown = searchTerm !== '' 
      ? listings.filter(listing => 
      listing.description.includes(searchTerm)) 
      : listings;

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        updateSearchTerm={updateSearchTerm}
      />
      <ListingsContainer 
        listings={listingsShown} 
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
