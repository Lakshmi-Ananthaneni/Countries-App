import React from 'react';

import { Link } from 'react-router-dom';
import { CountryProps } from '../Types';

const CountryDetails = ({country}: CountryProps) => {
  console.log(CountryDetails);
  const {flag,name,capital,nativeName,region,borders,timeZones}= country;
  return (
    <section className="countryInfo">
        <div><img className='countryFlag' src={flag} alt={name} /></div>
        <div className="countryDetails">
            <h2>{name}</h2>
            <p>Capital :{capital}</p>
            <p>Native Name:{nativeName}</p>
            <p>Region:{region}</p>
            <p>Borders: {borders}</p>
            <p>Time Zones:{timeZones}</p>
            
          <div><button><Link to="/">Back</Link></button></div>
        </div>
    </section>
  )
}

export default CountryDetails;



