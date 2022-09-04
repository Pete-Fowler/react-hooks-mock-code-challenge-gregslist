import React from "react";
import Search from "./Search";

function Header({ updateSearchTerm }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearchTerm={updateSearchTerm} />
    </header>
  );
}

export default Header;
