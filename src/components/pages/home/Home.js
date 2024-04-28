import React from 'react'
import NavBars from '../header/NavBars'
import OwlCarousel from '../OwlCarousel'
import Welcome from '../welcome/Welcome'
import ListingData from '../listdata/ListingData'
import SlickCarousel from '../carsoul/SlickCarousel'
import Footer from '../footer/Footer';
const Home = () => {
  return (
    <div>
  

    <OwlCarousel/>
    <Welcome/>
   <ListingData/>
    </div>
  )
}
export default Home   
