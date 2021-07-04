import React from 'react';
import './Searchbar.css'

const SearchBar = () => {
  const [keyword,setKeyword]= React.useState('')
  const handleSubmit = () => {
    console.log(keyword);
  }
  return (
    <section className="searchbar-container">
      <div className="searchbar-position">
        <input 
        key="random1"
        value={keyword}
        placeholder={"search for a dish"}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick = {handleSubmit}>Buscar</button>
      </div>
    </section>
  );
}
export default SearchBar;
