import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Home, Error, Country, Favourites } from './Pages/Index';

const Routing = () => {
  return (
     <Routes>
        <Route path="/" element ={<Home />} /> 
        <Route path="/country/:countryName" element ={<Country />} />
        <Route path="/favourites" element ={<Favourites />} />
        <Route path="*" element ={<Error />} /> 
      </Routes>
    )
}

export default Routing;