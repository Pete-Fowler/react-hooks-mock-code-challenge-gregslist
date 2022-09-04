import React from "react";
import Search from "./Search";
import Sort from './Sort';

function Header({ updateSearchTerm, updateSort, viewNewItemForm}) {
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
      <button type='button' onClick={viewNewItemForm}>New item</button>
    </header>
  );
}

export default Header;
