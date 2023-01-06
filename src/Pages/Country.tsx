import React from 'react';

import useCountry from '../custom-hooks/useCountry';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import CountryDetails from '../Components/CountryDetails';
import Footer from '../Layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../App/store';
import { fetchCountry } from "../features/country/CountrySlice";
import { useEffect } from 'react';

export const Country=() =>{
  const dispatch = useDispatch<AppDispatch>()
  const { countryName } = useParams()
  //const {country, isLoading,error} = useCountry(countryName!);
  const { country, isLoading, error } = useSelector((state: RootState) => state.countryR)
  useEffect(() => {
    dispatch(fetchCountry(countryName));
  },[countryName])
  
  if (!countryName || !country.length)
     return null
  return (
      <div className="countryPage">
        {error && <p>Error</p>}
        {isLoading && <p>Loading..</p>}
        <Navbar />
        <CountryDetails  country= {country[0]} />
        <Footer />
      </div>
   )
   
}






