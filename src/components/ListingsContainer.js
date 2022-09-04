import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteItem }) {
  
  const cards = listings.map(listing => 
    <ListingCard 
      id={listing.id}
      key={listing.id} 
      description={listing.description} 
      image={listing.image} 
      location={listing.location}
      deleteItem={deleteItem}
    />)

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
