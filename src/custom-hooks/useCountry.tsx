// This hook is used to fetch one specific country

import { Country } from '../Types';
import { useState, useEffect } from 'react';

const useCountry = (countryName : string) => {
    const [country, setCountry] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const API_URL = `https://restcountries.com/v2/name/${countryName}`;
    
    useEffect (() => {
      fetch(API_URL)
     .then((res) => {
        if (!res.ok) 
        {  throw Error ('count not fetch'); }
            return res.json();
        })
        .then ((data) => {
            const newData = data.map((item: any) => ({
                name: item.name, 
                population: item.population,
                capital: item.capital, 
                region: item.region,
                flag: item.flag,
                nativeName: item.nativeName,
                borders : item.borders,
                timeZones : item.timeZones,


              }))
            setCountry(newData);
            setIsLoading(false);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setCountry([]);
            setIsLoading(false);
        });
    },[countryName]); 

  return {country, isLoading,error};
}

export default useCountry;


 