import React, { useState } from "react";

function ListingCard({ description, image, location }) {
  const [ liked, setLiked ] = useState(false);

  const btnClass = liked ? "emoji-button favorite active" 
    : "emoji-button favorite";
  const btnEmoji = liked ? '★' : '☆';

  const like = () => {
    setLiked(liked => !liked);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className={btnClass} onClick={like}>{btnEmoji}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
