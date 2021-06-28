import React from 'react';
import './Searchbar.css'

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <section className="searchbar-container">
      <div className="searchbar-position">
        <input 
        key="random1"
        value={keyword}
        placeholder={"search for a dish"}
        onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </section>
  );
}
export default SearchBar;
