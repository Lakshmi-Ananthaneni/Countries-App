import React ,{useState}from 'react';

import { Countries,CountriesProps } from '../Types';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../App/store';
import { addFavourite, deleteFavourite } from "../features/Favourite/FavouritesSlice";

const CountriesTable = ({country} :CountriesProps ) => {
  const {flag,name ,population,capital,region} = country;
  const [buttonClick, setButtonClick] = useState(false);  
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (country:Countries) => {
   dispatch(addFavourite(country));
   setButtonClick(true);
   dispatch(deleteFavourite(country));
  }

  return (
   <tr>
      <td><img className='imgFlag' src={flag} alt={name} /></td>
      <td><Link to={`/country/${country.name}`} className="link"> {name}</Link></td>
      <td>{region}</td>
      <td>{capital}</td>
      <td>{(population/1000000).toFixed(2)}m</td>
      <td><button className="favLink icon" onClick= {()=> handleClick(country)} disabled= {buttonClick}><FaHeart /></button></td>
       </tr>
    )
}
export default CountriesTable;








