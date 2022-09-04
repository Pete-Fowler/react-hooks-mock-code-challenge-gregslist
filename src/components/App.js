import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
