import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Layouts/Footer'
import { FaHeart } from 'react-icons/fa'
import Searchbar from '../Components/Searchbar'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../App/store';
import FavTable from '../Components/CountriesTable'


export const Favourites = () => {
    const favouritesData = useSelector((state: RootState) => state.favouritesR.favourites);
 return (
    <div>
       <Navbar />
       <h1 className ="favInfo"> WE <span><FaHeart /></span> DATA</h1>
       <Searchbar />
       <table className="favTable">
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
          { favouritesData.map ((favourite : any) => { 
          return <FavTable key ={favourite.name} country= {favourite} /> })}
         </tbody>
        </table>
       <Footer />
      </div>
  )
}

