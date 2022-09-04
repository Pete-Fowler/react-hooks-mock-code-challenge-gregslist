import React from "react";
import Search from "./Search";
import Sort from './Sort';

function Header({ updateSearchTerm, updateSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearchTerm={updateSearchTerm} />
      <Sort updateSort={updateSort} />
    </header>
  );
}

export default Header;
