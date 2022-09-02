import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState('');

  fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      setListings(listings => data);
    })
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
