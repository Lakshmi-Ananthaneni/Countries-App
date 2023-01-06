import React from 'react'
import { useState } from 'react';
import useCountries from '../custom-hooks/useCountries';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    const {countries, isLoading, error} = useCountries();
    const [searchInput, setSearchInput] = useState<string>("");
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.toLowerCase().includes(searchInput);
      });
    }
  return (
    <div className = "search">
      
     <input className="search"
      type="search"
      placeholder="Search by Country..."
      onChange={handleChange}
      value={searchInput} />
   </div>
  )
}

export default Searchbar;