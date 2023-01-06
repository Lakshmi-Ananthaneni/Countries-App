import React, { useEffect } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import CountriesTable from './CountriesTable';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../App/store';
import { fetchCountries } from '../features/Countries/CountrieSlice';

const Countries = () => {
  const dispatch = useDispatch<AppDispatch>()
    //const {countries, isLoading, error} = useCountries();
  const { countries, isLoading, error } = useSelector((state: RootState) => state.countriesR)
  useEffect(() => {
    dispatch(fetchCountries());
    },[dispatch])
  return (
      <div>
        {error && <p>Error</p>}
        {isLoading && <p>Loading..</p>}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Flag</th>
              <th scope="col">Name</th>
              <th scope="col">Region</th>
              <th scope="col">Capital</th>
              <th scope="col">Population</th>
              <th scope="col">Favourites</th>
            </tr>
          </thead>
          <tbody>
           {countries.map ((country :any) => { 
           return <CountriesTable key ={nanoid()} country= {country} /> })}        
         </tbody>
        </table>
      </div>
     );
  }

export default Countries;