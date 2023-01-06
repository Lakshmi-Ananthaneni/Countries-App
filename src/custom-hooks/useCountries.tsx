// This hook is used to fetch all countries
/*eslint-disable */

import React, { useState, useEffect } from 'react';
import { Countries, Country } from '../Types';

const useCountries = () => {
    const [countries, setCountries] = useState<Country[] >([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const API_URL ='https://restcountries.com/v2/all'
    useEffect (() => {
        fetch(API_URL)
       .then((res) => {
          if (!res.ok)
           { throw Error ('count not fetch'); }
            return res.json();
          })
        .then ((data) => {
          const newData = data.map((item: Country) => ({
                name: item.name, 
                population: item.population,
                capital: item.capital, 
                region: item.region,
                flag: item.flag
            }))
          setCountries(newData);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setCountries([]);
          setIsLoading(false);
        });
    },[]); 
 return {countries,isLoading,error} ;
}

export default useCountries;