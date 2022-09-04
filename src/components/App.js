import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ sorted, setSorted ] = useState('original');

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

  function updateSort(string) {
    setSorted(string);
  }

  const listingsShown = searchTerm !== '' 
      ? listings.filter(listing => 
      listing.description.includes(searchTerm)) 
      : listings;
      
  listingsShown.sort((a, b) => {
        if (sorted === 'alphabetical') {
            const aStr = a.description.toUpperCase();
            const bStr = b.description.toUpperCase();
            return aStr < bStr ? -1 : 1;
        } else if (sorted === 'location') {
            const aStr = a.location.toUpperCase();
            const bStr = b.location.toUpperCase();
            return aStr < bStr ? -1 : 1;
        }
        return a.id - b.id;
      })

      console.table(listingsShown);

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        updateSearchTerm={updateSearchTerm}
        updateSort={updateSort}
      />
      <ListingsContainer 
        listings={listingsShown} 
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
