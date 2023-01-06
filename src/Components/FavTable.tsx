import React from 'react'
import { Countries,CountriesProps } from '../Types';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../App/store';
import { deleteFavourite } from '../features/Favourite/FavouritesSlice';


const FavouritesTable = ({country}: CountriesProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const {flag,name ,population,capital,region} = country;
  
  const handleClick = (country:Countries) => {
    dispatch(deleteFavourite(country));
  }
  
  return (
    <tr>
        <td><img className='imgFlag' src={flag} alt={name} /></td>
        <td><Link to={`/country/${country.name}`}> {name}</Link></td>
        <td>{region}</td>
        <td>{capital}</td>
        <td>{(population/1000000).toFixed(2)}m</td>
        <td><button className="favLink icon" onClick= {()=> handleClick(country)}><FaHeart /></button></td>
       
    </tr>
  )
}

export default FavouritesTable;