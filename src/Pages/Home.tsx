import React from 'react';

import Countries from '../Components/Countries';
import Navbar from '../Components/Navbar';
import Info from '../Layouts/Info';
import Searchbar from '../Components/Searchbar';
import Footer from '../Layouts/Footer';

export const Home=() => {
  return (
    <div>
       <Navbar />
       <Info />
       <Searchbar />
       <Countries />
       <Footer />
    </div>
  )
}
