import React from 'react';

import { Link } from 'react-router-dom';
import { FaHeart, FaSun, FaHouzz } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../App/store';
import Theme from './Theme';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const favouritesArr = useSelector((state:RootState) => state.favouritesR.favourites);
  const quantity = favouritesArr.length;
  return (
    <header className="header">
      <h3 className ="logo">F</h3>
      <nav >
        <ul>
         <li><Link to ="/" className="link homeLink">
          < FaHouzz/></Link></li>
         <li><Link to ="/favourites" className ="link favList">
          <FaHeart />{quantity}</Link></li>
          <li> <button className="link btnLink"> 
          <Theme /></button></li>
        </ul>
     </nav>
    </header>
  )
}
export default Navbar;
/*<li> <button className="link btnLink"> 
          <Theme /></button></li> */
